
let score = "33abc"


console.log(typeof score)
console.log(typeof(score ));

let valueNumber = Number(score)
console.log(typeof valueNumber)

console.log(valueNumber);


// "33" => 33
// "33abc" => NaN (Not a number)
// true = 1, false = 0

let logedIn = ""

let booleanLogedIn = Boolean(logedIn)
console.log(booleanLogedIn);

// 1 => true, 0 => false
// "" => false
// "kishan" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


let str1 = "Kishan"
let str2 = " Singh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true);
console.log(+true);
// console.log(true+); // error

console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100

++gameCounter;
console.log(gameCounter);
