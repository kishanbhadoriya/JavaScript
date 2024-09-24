// falsy value
// false, 0, -0, BogInt, 0n, "", null, undefined, NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}

const userEmail = []

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// Nulling Coaleshing operator (??): null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1);
val1 = null ?? 10;
console.log(val1);
val1 = undefined ?? 15;
console.log(val1);
val1 = null ?? 10 ?? 20
console.log(val1);

// Ternery Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater then 80") : console.log("less then 80");


