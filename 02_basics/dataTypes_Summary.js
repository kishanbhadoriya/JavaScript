/*
 :- Note :-
 Primative and Non-Primative category decide on Based on the memory store the data and access the data.
 based on this categorisation happened. 

 Primative :-
     7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

 Reference Type (Non-Primitive): -
    Isme memory me reference directly allocate kiya ja skta hai.
    Array, Objects, Functions
 */

    const score = 100
    const scoreValue = 100.3

    const isLoggedIn = false
    const outsideTemp = null
    let userEmail;

    const id = Symbol('123')
    const anotherId = Symbol('123')

    console.log(id === anotherId)

    const bigNum = 342156879823648798n

    // Array, Object

    const heros = ["Shaktiman", "nagraj", "doga"];

    let myObj = {
      name: "hitesh",
      age: 22,
    }

    const myFunction = function() {
      console.log("Hello World");
    }

    console.log(typeof myObj);
    
    // https://262.ecma-international.org5.1/#sec-11.4.3