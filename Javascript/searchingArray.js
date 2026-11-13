// Searching in Arrays-: Searching is the process of finding a particular element inside an array.

// Method 1: includes()
// includes() check karta hei ki given value array mei present hai yaa nhi.

// let students = ["Rahul", "Aman", "Priya", "Rohit"];

// let result = students.includes("Priya");

// console.log(result);


// Method 2: indexOf()
// indexOf() kisi element ka index position return karta hai.

// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.indexOf(80);

// console.log(result);


// Method 3: find()
// find() array mein se pehla element return karta hai jo given condition satisfy karta hai.

// let numbers = [10, 25, 35, 40, 50];

// let result = numbers.find((num) => {
//     return num > 50;
// });

// console.log(result);