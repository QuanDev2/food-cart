SELECT customerOrder.orderID,
  dish.dishName,
  orderPost.quantity,
  customer.customerName
FROM orderPost
  JOIN customerOrder USING (orderID)
  JOIN customer USING (customerID)
  JOIN post USING (postID)
  JOIN dishPost USING (postID)
  JOIN dish USING (dishID)