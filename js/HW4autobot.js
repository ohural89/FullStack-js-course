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
const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
        
    },
};
  // Change code above this line

  // Callback for onSuccess
function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

  // Callback for onError
function onOrderError(error) {
    return `Error! ${error}`;
}

  // Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);