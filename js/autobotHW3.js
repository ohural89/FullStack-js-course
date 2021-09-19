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
// Task 23
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  highIcon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
} = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

