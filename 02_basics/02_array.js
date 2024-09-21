const marvelHeros = ["Thor", "Iron Man", "Spider Man"];

const dcheros = ["Superman", "flash", "Batman"]

// marvelHeros.push(dcheros)
// console.log(marvelHeros);

// console.log(marvelHeros[3][1]);

const heros = marvelHeros.concat(dcheros)
console.log(heros);

const allNewHeros = [...marvelHeros, ...dcheros]
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
  
const realArray = anotherArray.flat(Infinity);
console.log(realArray);

console.log(Array.isArray('Kishan'));
console.log(Array.from('Kishan'));
console.log(Array.from({name: "kishan"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
