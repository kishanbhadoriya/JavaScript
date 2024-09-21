const myArray = [0, 1, 2, 3, 4, 5]
const heros = ["Shaktiman", "Aryman"]

const myArr2 = new Array(0, 1, 2, 3)

console.log(myArray[0]);
console.log(myArr2[1]);

// Array Method

myArray.push(6)
myArray.push(7)
// myArray.pop()

console.log(myArray);

myArray.unshift(0)
console.log(myArray);

myArray.unshift(9)
myArray.shift()
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(6));

const newArr = myArray.join();

console.log(myArray );
console.log(newArr);

// Slice, Splice

console.log("A", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);

console.log("B", myArray);

const myn2 = myArray.splice(1, 3)
console.log("C", myArray);

console.log(myn2);
