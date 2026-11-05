//A Higher Order Function is a function that either takes another function as an argument or returns another function.


//Normal Function

// function name(){
//     console.log("heelo all");
// }

// name();


//Higher Order Functions
function greet() {
    console.log("Hello Students");
}

function welcome(callback) {
    callback();
}

welcome(greet);