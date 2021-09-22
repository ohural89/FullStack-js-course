// Module 3
// Завдання 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//   const totalPrice = (pricePerDroid * orderedQuantity)
//     // Change code above this line
//         if (totalPrice > customerCredits) {
//             message = 'Insufficient funds!';
//         } else {
//             message = 'You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left';
// }
//     return message;
// }

//     makeTransaction(3000, 5, 23000);
//     makeTransaction(1000, 3, 15000);
//     makeTransaction(5000, 10, 8000);
//     makeTransaction(2000, 8, 10000);
//     makeTransaction(500, 10, 5000);

// Завдання 24
// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
// switch (totalSpent) {
//     case ">= 50000":
//     discount = GOLD_DISCOUNT;
//     break;
    
//     case ">= 20000 || <= 50000":
//     discount = SILVER_DISCOUNT;
//     break;
    
//     case ">= 5000 || <= 20000":
//     discount = BRONZE_DISCOUNT;
//     break;
    
//     case "< 5000":
//     discount = BASE_DISCOUNT;

//     // Change code above this line
//     return discount;
// }
//     getDiscount(137000);
//     getDiscount(46900);
//     getDiscount(8250);
//     getDiscount(1300);
//     getDiscount(5000);
//     getDiscount(20000);
//     getDiscount(50000);
// }
// варіант 2 - підходить для цього завдання
// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
    
// if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000 || totalSpent <= 50000) {
//     discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000 || totalSpent <= 20000) {
//     discount = BRONZE_DISCOUNT;
// } else {
//     discount = BASE_DISCOUNT;
// }

// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);
// }

// Task 25
// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
//   // Change code below this line

//     const highToday = forecast.today.high;
//     const lowToday = forecast.today.low;
//     const todayIcon = forecast.today.icon;

//     const highTomorrow = forecast.tomorrow.high;
//     const lowTomorrow = forecast.tomorrow.low;
//     const tomorrowIcon = forecast.tomorrow.icon;

// // Відповідь
//     const {
//     today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"},
//     tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = 
//     "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, } = forecast;
//     const highTemperatures = (forecast.today * forecast.tomorrow) / 2

// Завдання 29
// function getShippingCost(country) {
//     let message;
//     let price;
//     // Change code below this line
    
// switch (country) {
//     case "China":
//     price = 100;
//     break;
    
//     case "Chile":
//     price = 250;
//     break;
    
//     case "Australia":
//     price = 170;
//     break;
    
//     case "Jamaica":
//     price = 120;
//     break;

//     default:
//     message = `Shipping to ${country} will cost ${price} credits`;

//     // default:
//     // message = `Sorry, there is no delivery to your country`
// }
//     // Change code above this line
//     return message;
// }

// //  Задача бот Модуль 2
// function splitMessage(message, delimeter) {
//     let words;

//     const message = delimeter.split(" ");
//     const message = delimeter.split("");
//     const message = delimeter.split("_");
//         console.log(phrase);
//         console.log(word);
//         console.log(partPhrase);

//     return words;
// }

// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");
// Task 20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (let product of products) {
//     switch (productName) {
//   case "*":
//   totalPrice = product.price * product.quantity;
    
// }
//   }
//     return totalPrice;
//   // Пиши код выше этой строки
// }
// // Task 23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   highIcon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// // Task 30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// const newTask = {completed, category, priority, ...data};
// return newTask; 
//   // Change code above this line
// }

// //  Task 35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
// const newBook = this.books.indexOf(oldName);
// this.books.splice(newBook, 1, newName);
//     return bookShelf.updateBook;
//     // Change code above this line
//   },
// };

// //  Task 39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
// const removePotion = this.potions.indexOf(potionName);
// this.potions.splice(removePotion, 1);

//     // Change code above this line
//   },
// };

// // Task 40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// const updatePotion = this.potions.indexOf(oldName);
// this.potions.splice(updatePotion, 1, newName);

//     // Change code above this line
//   },
// };

//  Task 41 (дивтися репозиторій викладача)
