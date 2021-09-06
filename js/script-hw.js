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