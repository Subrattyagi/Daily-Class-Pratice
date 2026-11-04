// Har topic ka example neeche comment hai.
// Kisi example ko chalane ke liye uska comment hatao.

// 1. Concatenation aur addition
// let firstValue = "10";
// let secondValue = "5";
// console.log(firstValue + secondValue); // "105" - strings judti hain
// console.log(parseInt(firstValue) + parseInt(secondValue)); // 15 - numbers judte hain

// 2. Debugging methods
// console.log("Console mein message dekho");
// alert("Screen par popup dikhega");
// document.write("Page par text dikhega");

// 3. Parsing methods
// let wholeNumber = parseInt("25");
// let decimalNumber = parseFloat("3.14");
// console.log(wholeNumber);
// console.log(decimalNumber);

// 4. Normal function aur arrow function
// function sayHello() {
//     console.log("Hello!");
// }
// sayHello();
//
// const sayHi = () => {
//     console.log("Hi!");
// };
// sayHi();

// 5. Callback function
// function doTask(callback) {
//     console.log("Task complete");
//     callback();
// }
// doTask(() => console.log("Callback chala"));

// 6. Single if condition
// let age = 18;
// if (age >= 18) {
//     console.log("You can vote");
// }

// 7. Multiple if conditions
// let marks = 75;
// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 60) {
//     console.log("Grade B");
// } else {
//     console.log("Keep practicing");
// }

// Sirf yeh example abhi active hai. Console mein F12 dabakar output dekho.
let count = 1;

const timer = setInterval(() => {
    console.log(count);
    count++;

    if (count > 5) {
        clearInterval(timer);
        console.log("Timer stopped");
    }
}, 1000);
