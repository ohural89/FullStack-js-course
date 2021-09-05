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

const value = prompt("Please enter a number!");
console.log(typeof value); // "string"
console.log(value); // "5"