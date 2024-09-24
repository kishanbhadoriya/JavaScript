const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}
 
const greeting = "Hello world"

for (const greet of greeting) {
    // console.log(greet);
}

// Map

const map = new Map()
map.set(`In`, "India")
map.set(`USA`, "United State of America")
map.set(`fr`, "France")
map.set(`In`, "India")
// console.log(map);

for (const key in map) {
    console.log(key);
    
}

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// const myObject = {
//     'game1': 'NFS',
//     'game2 ': 'spiderman'
// }

// for (const [key, value] of myObject) {
//     // console.log(key, ':-', value);
// }
// myobject is not iterable

const myObject1 = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    Swift: "Swift by Apple iOS App "
}

// for (const key in myObject1) {
    // console.log(key);
// }

for (const key in myObject1) {
    // console.log(myObject1[key]);
    // console.log(`${key} shortcut is for ${myObject1[key]}`);
}

const program = ["cp", "c", "py", "rb", "swift"]

for (const key in program) {
    // console.log(key);
    // console.log(program[key]);
    
}
