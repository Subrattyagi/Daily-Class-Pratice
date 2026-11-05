//Function apne parent function ke variables ko yaad rakhta hai, even jab parent function execute ho chuka ho.

// Lexical Scope-> JavaScript mein function apne surrounding (parent) scope ke variables ko access kar sakta hai.

// Scope Chain-> Variable apne scope mein nahi milta, toh JavaScript bahar wale scope mein search karta hai.


function main()
{
    let name = "Subrat Tyagi"

   function sayMyName(){               
    console.log(name);
   }
   sayMyName();

}

main();


// function main()
// {
//     let name = "Subrat Tyagi";
 
//     function sayMyName(){
//         console.log(name);
//     }
//     sayMyName();
// }
// main();