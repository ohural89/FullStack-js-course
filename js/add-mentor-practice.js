// Практика з ментором 19.09.2021
// Практичні задачі

// Задача 1
//  Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.
// const arr = [1, 2, 3, -1, -2, -3];

// Задача 2
// Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
// function polindrom(srting) {
//     const lowerCaseString = string.toLowerCase();

//     return lowerCaseString === lowerCaseString.split("").reverse().join("");
// }
// console.log(polindrom("Anna"));

// Задача 3
// Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».

// function findLetters(string) {
//     const letters = ["a", "e", "i", "o", "u"];
//     let count = 0;

//     for (const letter of string) {
//         if (letters.includes(letter)) {
//             count += 1;
//         }

//     }
//     return count;
// }

// console.log(findLetters("Features"));

// Задача 4
// Калькулятор
// function calculator(firstNumber, secondNumber, operation) {
//     switch (operation) {
//         case "+":
//             return firstNumber + secondNumber;
//     }

//     switch (operation) {
//         case "-":
//             return firstNumber - secondNumber;
//     }

//     switch (operation) {
//         case "*":
//             return firstNumber * secondNumber;
//     }

//     switch (operation) {
//         case "/":
//             return firstNumber / secondNumber;

//         default:
//             return "Enter true data!";
//     }
// }
// console.log(calculator(87, 23, "%")); // NaN - Not-A-Number


// варіант 1
// function calculator(x, y, operation) {
//     const result = Number((x operation y)); // пмилка
//     return result
// }
// console.log(calculator(5, 7, '+'));

// варіант 2
// function calculator(x, y, operation) {
//     return `${x} ${operation} ${y}`; {

//     }
// }
// console.log(calculator(5, 7, '+'));
// Кінець Практики з ментором 19.09.2021