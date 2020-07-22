let ordersTable = document.getElementById('orders-table');
let sellersTable = document.getElementById('sellers-table');
let customersTable = document.getElementById('customers-table');
function showOrders() {
  ordersTable.style.display = 'block';
  sellersTable.style.display = 'none';
  customersTable.style.display = 'none';
}
function showSellers() {
  sellersTable.style.display = 'block';
  ordersTable.style.display = 'none';
  customersTable.style.display = 'none';
}
function showCustomers() {
  customersTable.style.display = 'block';
  sellersTable.style.display = 'none';
  ordersTable.style.display = 'none';
}
window.addEventListener('DOMContentLoaded', function () {
  let ordersBtn = document.getElementsByClassName('orders-btn')[0];
  ordersBtn.addEventListener('click', showOrders);
  let sellersBtn = document.getElementsByClassName('sellers-btn')[0];
  sellersBtn.addEventListener('click', showSellers);
  let customersBtn = document.getElementsByClassName('customers-btn')[0];
  customersBtn.addEventListener('click', showCustomers);
  showOrders();
});
