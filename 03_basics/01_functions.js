
function sayName() {
console.log("K");
console.log("I");
console.log("S");
console.log("H");
console.log("A");
console.log("N");
}

// sayName()

function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
}

// const result = addTwoNumber(3, 4);
// addTwoNumber(3, "4");

// console.log("Result", result);

function addTwoNumber(number1, number2) {
    const result = number1 + number2

    return result
}

const result = addTwoNumber(3, 4);
console.log("Result", result);


// function loginUserMessage(username) {
//     return `{username} just logged in`
// }

// loginUserMessage("kishan")
// console.log(loginUserMessage("kishan"));

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("kishan"));

function calculatePrice(...num1) {
    return num1
}

// console.log(calculatePrice(2));

// console.log(calculatePrice(200, 300, 400, 2000));

function calculatePrice1(value1, valu2, ...num1) {
    return num1
}
// console.log(calculatePrice1(200, 300, 400, 2000));

const user = {
    username: "Kishan",
    price: 199
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "Sam",
    price: 399 
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}


console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 100, 1000]));
