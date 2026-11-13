// Javascript array methods (map, filter, reduce)  -> These are the in-built high order functions of javascript.

//map() method
// The map() method creates a new array by applying a function to every element of the original array.

// let numbers = [10, 20, 30, 40, 50];
// map() → Har student ke marks ko transform karna.

// let numbers = [10, 20, 30, 40];

// let result = numbers.map(function(num) {
//     return num * 2;
// });

// console.log(result);


//Filter() method
// filter() condition check karta hai aur sirf matching elements ko new array mein rakhta hai.

// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.filter(function(num) {
//     return num > 25;
// });

// console.log(result);


//reduce() method
//reduce() array ke multiple elements ko combine karke ek single result banata hai.

// let numbers = [10, 20, 30, 40]; 

// let result = numbers.reduce(function(total, num) {
//     return total + num;   // 100
// }, 0);

// console.log(result);


// // for each

// let numbers = [10, 20, 30, 40];

//  numbers.forEach(function(num) {
//     console.log(num);
// });

// Ex-2

let numbers = [10, 20, 30, 40];

numbers.forEach(function(num) {
    let result = num * 2;
    console.log(result);
});