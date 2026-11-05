//setInterval() is a JavaScript function that executes a particular piece of code repeatedly after a specified time interval.

let count = 1;

let timer = setInterval(function(){
    console.log(count); 
    count++;  

    if (count > 5){
        clearInterval(timer);
    }
},1000);










// let count = 1;

// let timer = setInterval(function() {
//     console.log(count);

//     count++;

//     if (count > 5) {
//         clearInterval(timer);
//     }
// }, 1000);