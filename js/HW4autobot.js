// Task 1
// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
// }
  // Change code below this line

// const result = null;
// const pointer = null;

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
// }
  // Change code below this line
// const result = makePizza();
// const pointer = makePizza;

// Task 2
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

//   // Chande code below this line
// function makeMessage(pizzaName) {
//     return;
// }

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

//   // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// Task 3
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
//   // Change code below this line

// makePizza("Ultracheese");

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
//   // Change code below this line
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza  ${pizzaName}.`);
// });

// Task 4
// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//       for (let piza of this.pizzas){
//         if (pizzaName === piza) {
//           return makePizza(pizzaName);
//         }
//       }
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     },
//   };
//   // Change code above this line

//   // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

//   // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }

//   // Method calls with callbacks
// // pizzaPalace.order('Smoked', makePizza, onOrderError);
// // pizzaPalace.order('Four meats', makePizza, onOrderError);
// // pizzaPalace.order('Big Mike', makePizza, onOrderError);
// // pizzaPalace.order('Vienna', makePizza, onOrderError);

// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// Task 5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

  // orderedItems.forEach(function(number, index) {
  //   totalPrice += number;
  // });
  
//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Task 6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(function(number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Task 7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(function(number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// Task 8
// Change code below this line

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>
// {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// Task 9
// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// // Change code above this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// Task 10
// Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Task 11
// Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Task 12
// Change code below this line
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// Task 13
// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i])
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// Task 14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets;
// //  вирішення
// const planetsLengths = planets.map(planet => planet.length);

// Task 15
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books;
// // вирішення
// const titles = books.map(book => book.title);

// Task 16
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line
// const genres = books;
// // вирішення
// const genres = books.flatMap(book => book.genres);

// Task 17, 18; 22, 23, 24, 25, 26, 27, 29, 33, 36, 37, 42, 43, 46, 47, 48
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// Task 48
// Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users].filter(user => user.gender === gender).reduce((totalBalance, user) => totalBalance + user.balance, 0)
// };
// Change code above this line


// // Change code below this line
// // const getUserNames = users => {

// // };
// // Change code above this line

// // Change code below this line
// const getUserNames = users.map(user => user.name);
// const getUseEmails = users.map(user => user.email);

// users.map(user => user.name);
// users.map(user => user.email);

// console.log(getUserNames);
// console.log(getUseEmails);
// Change code above this line

// Task 22
// // Change code below this line
// // const getUsersWithEyeColor = (users, color) => {
// //   };
// // // Change code above this line

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

// getUsersWithEyeColor(users, "blue");
// getUsersWithEyeColor(users, "brown");
// getUsersWithEyeColor(users, "green");

// // Change code above this line
// console.log(getUsersWithEyeColor(users, "blue"));
// console.log(getUsersWithEyeColor(users, "brown"));
// console.log(getUsersWithEyeColor(users, "green"));

// Task 23

// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge)
// };
// // Change code above this line
// getUsersWithAge(20, 30);
// getUsersWithAge(30, 40);
// getUsersWithAge(80, 100);

// console.log(getUsersWithAge(20, 30));
// console.log(getUsersWithAge(30, 40));
// console.log(getUsersWithAge(80, 100));

// Task 24

// Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName))

// };
// // Change code above this line
// getUsersWithFriend("Briana Decker");
// getUsersWithFriend("Goldie Gentry");
// getUsersWithFriend("Adrian Cross");

// console.log(getUsersWithFriend("Briana Decker"));
// console.log(getUsersWithFriend("Goldie Gentry"));
// console.log(getUsersWithFriend("Adrian Cross"));

// Task 25
// Change code below this line
// const getFriends = (users) => {
//   let allFriendsList = users.flatMap(user => user.friends);
//   return allFriendsList.filter((friends, index) => allFriendsList.indexOf(friends) === index)
// };
// // Change code above this line

// Task 26
// Change code below this line
// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive === true)
// };
// Change code above this line

// Task 27
// Change code below this line
// const getInactiveUsers = (users) => {
//   return users.filter(user => user.isActive === false)
// };
// Change code above this line

// Task 29
// Change code below this line
// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email)
// };
// Change code above this line

// Task 31
// Change code below this line
// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive === true)
// };
// Change code above this line

// Task 33
// Change code below this line
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive === true)
// };
// Change code above this line

// Task 36
// Change code below this line
// const calculateTotalBalance = users => {
// };
// Change code above this line
// answer
// Change code below this line
// const calculateTotalBalance = (users) => {
//   const totalBalance = users.reduce((total, user) => {
//     return total + user.balance}, 0)
//       return totalBalance;
// };
// // Change code above this line
// console.log(calculateTotalBalance);

// Task 37
// Change code below this line
// const getTotalFriendCount = users => {
//   return users.reduce((totalFriends, user)=> {
//     return totalFriends + user.friends.length
//     }, 0)
// };
// Change code above this line

// Task 42
// Change code below this line
// const sortByAscendingBalance = users => {
  
// };
// Change code above this line
// answer
// const sortByAscendingBalance = users => {
//   const newArray = [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance)
//   return newArray;
// };
// Task 43
// Change code below this line
// const sortByDescendingFriendCount = users => {
  
// };
// Change code above this line
// const sortByDescendingFriendCount = users => {
//   const newArray = [...users].sort((firstUser, secondUser) =>
//   secondUser.friends.length - firstUser.friends.length)
//   return newArray;
// };

// Task 44
// Change code below this line
// const sortByName = users => {
//   const newArray = [...users].sort(
//     (firstUser, secondUser) =>
//     firstUser.name.localeCompare(secondUser.name)
//   )
//   return newArray;
// };

// Change code above this line

// Task 46
// Change code below this line
// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)
// };
// Change code above this line

// Task 47
// Change code below this line
// const getSortedFriends = users => {
//   return users.flatMap(user => user.friends).filter((friend, index, allFriends) => allFriends.indexOf(friend) === index).sort((a, b) => a.localeCompare(b))
// };
// Change code above this line




// Task 19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // // Change code below this line
// // const evenNumbers = numbers;
// // const oddNumbers = numbers;

// // Change code below this line
// const evenNumbers = numbers.filter(number => number % 2 == 0);
// const oddNumbers = numbers.filter(number => number % 2 === 1);

// console.log(evenNumbers);
// console.log(oddNumbers);



// Task 20, 21, 28, 41
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// 20
// // Change code below this line
// // const allGenres = books;
// // const uniqueGenres = allGenres;
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => allGenres.indexOf(genre) === index);

// console.log(allGenres);
// console.log(uniqueGenres);
// 21
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line
// const topRatedBooks = books;
// const booksByAuthor = books;
// // answer
// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);
// 28
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);
// 41
// // Change code below this line
// // const sortedByAuthorName = books;
// // const sortedByReversedAuthorName = books;
// // const sortedByAscendingRating = books;
// // const sortedByDescentingRating = books;
// // answer
// // Change code below this line
// const sortedByAuthorName = [...books].sort((firstAuthor,secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author));
// const sortedByReversedAuthorName = [...books].sort((firstAuthor,secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author));
// const sortedByAscendingRating = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.rating - secondAuthor.rating);
// const sortedByDescentingRating = [...books].sort((firstAuthor, secondAuthor) => secondAuthor.rating - firstAuthor.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// Task 45 (chaining) метод ланцюжків
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood",
//     author: "Tanith Lee", 
//     rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line
// const names = books.filter(book => book.rating > MIN_BOOK_RATING)
// .map(book => book.author).sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));

// console.log(names);

// Task 30 every(), 32 some()
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
//  30
// // Change code below this line
// const eachElementInFirstIsEven = firstArray.every(number => number % 2 == 0);
// const eachElementInFirstIsOdd = firstArray.every(number => number % 2 == 1);

// const eachElementInSecondIsEven = secondArray.every(number => number % 2 == 0);
// const eachElementInSecondIsOdd = secondArray.every(number => number % 2 == 1);

// const eachElementInThirdIsEven = thirdArray.every(number => number % 2 == 0);
// const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 == 1);

// 32
// Change below this line
// const anyElementInFirstIsEven = firstArray.some(number => number % 2 == 0);
// const anyElementInFirstIsOdd = firstArray.some(number => number % 2 == 1);

// const anyElementInSecondIsEven = secondArray.some(number => number % 2 == 0);
// const anyElementInSecondIsOdd = secondArray.some(number => number % 2 == 1);

// const anyElementInThirdIsEven = thirdArray.some(number => number % 2 == 0);
// const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 == 1);

// Task 34 reduce()
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, player) => acc + player);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(playtimes);
// console.log(totalPlayTime);
// console.log(averagePlayTime);

// Task 35 reduce()
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// // my opinion
// // const totalAveragePlaytimePerGame = players.reduce((acc, gamesPlayed) => acc / gamesPlayed);

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return (acc += player.playtime / player.gamesPlayed);
// }, 0);
// console.log(totalAveragePlaytimePerGame);

// Task 38, 39, 40
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// Change code below this line
// const ascendingReleaseDates = releaseDates;
// const alphabeticalAuthors = authors;

// answer
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// 39
// Change code below this line
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// Task 41
// Change code below this line
// const authorsInAlphabetOrder = authors;
// const authorsInReversedOrder = authors;

// Change code below this line
// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

