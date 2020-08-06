function isNumeric(value) {
  return /^\d+$/.test(value);
}

const showSuccess = () => {
  let resultDiv = document.getElementById("post-result");
  resultDiv.innerHTML = "<h3>Your post was created!</h3>";
};

const priceElem = document.getElementById("price-input");
const form = document.getElementById("sell-dish-form");
const dishNameElem = document.getElementById("dishMenu");
const sellerNameElem = document.getElementById("sellerNames");

priceElem.parentElement.removeAttribute("data-error");
document.querySelectorAll(".field input").forEach((elem) => {
  elem.addEventListener("input", () => {
    elem.parentElement.removeAttribute("data-error");
  });
});

/******************************
 * Handle preview image upload
 */

document.getElementById("image-upload").onchange = function () {
  let reader = new FileReader();
  reader.onload = function (event) {
    // get loaded data and render thumbnail
    document.getElementById("image-preview").src = event.target.result;
  };
  // read image file as data url
  reader.readAsDataURL(this.files[0]);
};

form.addEventListener("submit", async (event) => {
  let hasError = false;

  event.preventDefault();
  const dishName = $("#dishMenu").dropdown("get text");
  const sellerName = $("#sellerNames").dropdown("get text");
  // validate price as number
  // console.log(type(qtyElem.value));
  if (isNaN(priceElem.value) || priceElem.value == "") {
    priceElem.parentElement.setAttribute("data-error", "Invalid price");
    hasError = true;
  }

  if (dishName == "Dish Name") {
    alert("Please choose a dish name");
    hasError = true;
  }
  if (sellerName == "Seller name") {
    alert("Please choose a seller name");
    hasError = true;
  }
  if (hasError == true) return;
  try {
    console.log(document.getElementById("image-upload").files[0]);
    let formData = new FormData();
    formData.set("dishName", dishName);
    formData.set("price", priceElem.value);
    formData.set("image", document.getElementById("image-upload").files[0]);
    formData.set("sellerName", sellerName);

    const res = await axios.post("/create-post", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    dishNameElem.children[1].textContent = "Dish Name";
    sellerNameElem.children[1].textContent = "Seller Name";
    showSuccess();
  } catch (err) {
    throw err;
  }
  form.reset();
});
