// Inheritance means one object or class can use the properties and methods of another class.

// Jab ek class doosri class ki properties aur functions ko use kar sakti hai, toh use Inheritance bolte hain.

class Parent {

    house() {
        console.log("Parent has a house");
    }

}

class Child extends Parent {

    car() {
        console.log("Child has a car");
    }

}

let obj = new Child();

obj.house();
obj.car();