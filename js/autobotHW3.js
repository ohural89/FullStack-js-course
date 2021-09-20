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


// Task 30
function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
const newTask = {completed, category, priority, ...data};
return newTask; 
  // Change code above this line
}

//  Task 35
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
const newBook = this.books.indexOf(oldName);
this.books.splice(newBook, 1, newName);
    return bookShelf.updateBook;
    // Change code above this line
  },
};

//  Task 39
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
const removePotion = this.potions.indexOf(potionName);
this.potions.splice(removePotion, 1);

    // Change code above this line
  },
};

// Task 40
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
const updatePotion = this.potions.indexOf(oldName);
this.potions.splice(updatePotion, 1, newName);

    // Change code above this line
  },
};

//  Task 41
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  
addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        this.potions.push(newPotion);
      }
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
},
  
removePotion(potionName) {
  for (const potion of this.potions) {
    if (potion.name === potion) {
      this.potions.splice(potionName, 1);
    }
    return `Potion ${potionName} is not in inventory!`;
  }

  // for (let i = 0; i < potions.length; i += 1) {
  //   const {name} = potions[i];
  //   if (potionName === name) {
  //     potions.splice(i, 1);
  //   }
  //   return `Potion ${potionName} is not in inventory!`;
  // }
},
  
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (oldName === potion) {
        
    }
    for (let i = 0; i < potions.length; i++) {
      const {name} = potions[i];
     
        return (name = newName);
      }
      return `Potion ${oldName} is not in inventory!`;
    }
  },
  // Change code above this line
  // Варіант 2
  //   updatePotionName(oldName, newName) {
  //   for (let potion of this.potions) {
  //     if (potion.name === oldName) {
  //       return potion.name = newName;
  //     }
  //   }
  //   return `Potion ${oldName} is not in inventory!`;
  // },
};


