// Task 1
// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);

//         if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
// };

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));

// Task 2
// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
//     // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// Task 3
// const historyService = {
//     orders: [
//         { email: "jacob@hotmail.com", dish: "Burrito" },
//         { email: "solomon@topmail.net", dish: "Burger" },
//         { email: "artemis@coldmail.net", dish: "Pizza" },
//         { email: "solomon@topmail.net", dish: "Apple pie" },
//         { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//         return this.orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//         const emails = this.orders.map(order => order.email);
//         const uniqueEmails = new Set(emails);
//         return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//         return this.orders.filter(order => order.email === email);
//     },
//     // Change code above this line
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

// Task 4
// const parent = {
// name: "Stacey",
// surname: "Moore",
// age: 54,
// heritage: "Irish",
// };
//   // Change code below this line

// const child = Object.create(parent);

//   // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname")); // true
// console.log(parent.hasOwnProperty("heritage")); // true
// console.log(child.hasOwnProperty("name")); // true
// console.log(child.hasOwnProperty("age")); // true
// console.log(child.hasOwnProperty("surname")); // false
// console.log(child.hasOwnProperty("heritage")); // false
// console.log(parent.isPrototypeOf(child)); // false --> true

// Task 5
// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
// };
// // Change code below this line

// const parent =  Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line
// console.log(ancestor.isPrototypeOf(parent)); // true --> false?
// console.log(parent.isPrototypeOf(child)); // true --> false?
// console.log(ancestor.hasOwnProperty("surname")); // true
// console.log(parent.hasOwnProperty("surname")); // true
// console.log(child.hasOwnProperty("surname")); // false
// console.log(ancestor.hasOwnProperty("heritage")); // true
// console.log(parent.hasOwnProperty("heritage")); // false
// console.log(child.hasOwnProperty("heritage")); // false

// console.log(ancestor.surname); // "Dawson"
// console.log(parent.surname); // "Moore"
// console.log(child.surname); // "Moore"
// console.log(ancestor.heritage); // "Irish"
// console.log(parent.heritage); // "Irish"

// Task 6
// class Car {}

// Task 7
// class Car {
// // Change code below this line
// constructor (brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }
// // Change code above this line
// }

// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X5", 58900));
// console.log(new Car("Nissan","Murano", 31700));

// Task 8
// class Car {
// // Change code below this line
//     constructor( {brand, model, price} ) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// // Change code above this line
// }

// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X5", 58900));
// console.log(new Car("Nissan","Murano", 31700));

// Task 9
// class Car {
// constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     }
// // Change code below this line
// getPrice() {
//     return this.price;
// }

// changePrice(newPrice) {
//     this.price = newPrice;
// }
// // Change code above this line
// }

// Task 10
class Storage {
    constructor (items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(newItem) {
        this.items = items.push(newItem);
    }

    removeItem(itemToRemove) {
        this.items = items.filter(itemToRemove);
    }
}


// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]