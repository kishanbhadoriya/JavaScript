// Stack Memory :- Primative 
// Heap Memory :- Non-Primitive

let myName = "Kishan"

let anotherName = myName

anotherName = "Singh"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "kishan@gmail.com",
    upi: "k@icici"
}

let userTwo = userOne

userTwo.email = "vanya@gmail.com"

console.log(userOne);
console.log(userTwo);



