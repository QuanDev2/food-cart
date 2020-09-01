let ordersTable = document.getElementById('orders-table');
let sellersTable = document.getElementById('sellers-table');
let customersTable = document.getElementById('customers-table');
let driversTable = document.getElementById('drivers-table');

function showOrders() {
  ordersTable.style.display = 'block';
  sellersTable.style.display = 'none';
  customersTable.style.display = 'none';
  driversTable.style.display = 'none';
}
function showSellers() {
  sellersTable.style.display = 'block';
  ordersTable.style.display = 'none';
  customersTable.style.display = 'none';
  driversTable.style.display = 'none';
}
function showCustomers() {
  customersTable.style.display = 'block';
  sellersTable.style.display = 'none';
  ordersTable.style.display = 'none';
  driversTable.style.display = 'none';
}
function showDrivers() {
  driversTable.style.display = 'block';
  sellersTable.style.display = 'none';
  ordersTable.style.display = 'none';
  customersTable.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', function () {
  showOrders();
  let ordersBtn = document.getElementsByClassName('orders-btn')[0];
  ordersBtn.addEventListener('click', showOrders);
  let sellersBtn = document.getElementsByClassName('sellers-btn')[0];
  sellersBtn.addEventListener('click', showSellers);
  let customersBtn = document.getElementsByClassName('customers-btn')[0];
  customersBtn.addEventListener('click', showCustomers);
  let driversBtn = document.getElementsByClassName('drivers-btn')[0];
  driversBtn.addEventListener('click', showDrivers);

  // add event listener to show detail btn
  document.querySelectorAll('.details-btn').forEach(element => {
    element.addEventListener('click', async event => {
      const orderID = event.target.parentNode.parentNode.querySelector(
        'td[data-label="order-id"]'
      ).innerText;

      axios.get('/order-details', {
        params: {
          orderID: orderID
        }
      });
    });
  });
});
