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
    const res = await axios.post("/create-post", {
      dishName: dishName,
      price: priceElem.value,

      sellerName: sellerName,
    });
    dishNameElem.children[1].textContent = "Dish Name";
    sellerNameElem.children[1].textContent = "Seller Name";
    showSuccess();
  } catch (err) {
    throw err;
  }
  form.reset();
});
