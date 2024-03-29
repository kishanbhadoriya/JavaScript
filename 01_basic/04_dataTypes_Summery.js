// Primitive Data Type

            // 7 Types:- String, Boolean, Number, null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLogin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 758765765454358787988989n


// Reference Type (Non Primitive) Data Type

            // Array, Objects, Function
    
const heros = ["Shaktiman", "Spiderman", "Nagraj"]
let myObj = {
    name: "Kishan",
    age: "32"
}

// const myfunc = functionvalue() {
//     console.log("function");
// }

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
// JavaScript is dynamic type language

//******************************************Memory*******************//

// Stack Memory---- Primative Data Type
// Heap Memory------ Non Primitive Data Type

let myName = "Kishan"
let yourName = myName
myName = "Singh"

console.log(myName);
console.log(yourName);

let user = {
    email: "kishan@gmail.com",
    upi: "user@ybl"
}

let user2 = user

user2.email = "user@gmail.com"
console.log(user.email);
console.log(user2.email);






