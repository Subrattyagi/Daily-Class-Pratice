// Ek hi action ya method different situations mein different behaviour show kar sakta hai.

class Dog {

    sound() {
        console.log("Dog barks");
    }

}

class Cat {

    sound() {
        console.log("Cat meows");
    }

}

let dog = new Dog(); 
//Abhi tak humne sirf Dog class banayi thi. Lekin agar humein us class ke methods ko use karna hai, toh humein uska object create karna hoga.
let cat = new Cat();

dog.sound();  
cat.sound();