// Optional Chaining ( ?.) - agar object ki koi property exist nahi karti ya uski value undefined hai, toh optional chaining error aane se bachati hai.

// Without optional Chaining
// let student = {
//     name: "Rahul"
// };

// console.log(student.address.city);

// By Using Optional Chaining 

//Ex-1 

// let student = {
//     name: "Rahul"
// };

// console.log(student.address?.city);

// Ex-2

// let student = {
//     name: "Rahul",

//     // address: {
//     //     city: "Gwalior"
//     // }
// };

// console.log(student.address?.city);
// console.log(student.address?.pincode);