// Module 3
// Task 20
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let totalPrice = 0;
  for (let product of products) {
    switch (productName) {
  case "*":
  totalPrice = product.price * product.quantity;
    
}
  }
  
  return totalPrice;


  // Пиши код выше этой строки
}
