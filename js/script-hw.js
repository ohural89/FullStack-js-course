// const message = "Hi! My name is Olena. Welcome to IT world.";
// alert(message);

console.group('User Details');
    console.log('name: Olena Hural');
    console.log('education: Physician');

// Nested Group
    console.group('Address');
    console.log('Street: Naukova');
    console.log('City: Lviv');
    console.log('Country: UA');
    console.groupEnd();
console.groupEnd();

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

// Завдання 4
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice)

// Завдання 5
// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message)

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

// Практика з ментором 19.09.2021

// Практичні задачі

// Задача 1
//  Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.
const arr = [1, 2, 3, -1, -2, -3];

// Задача 2
// Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
function polindrom(srting) {
    const lowerCaseString = string.toLowerCase();

    return lowerCaseString === lowerCaseString.split("").reverse().join("");
}
console.log(polindrom("Anna"));

// Задача 3












