const name = "Kishan"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count ${repoCount}`);

const gameName = new String('KishanSingh')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Kiisgan  "
console.log(newStringOne);
console.log(newStringOne.trim() );

const url = "https://www.kishan%20Singh%20bhadoriya"
console.log(url.replace("%20", '-'));

console.log(url.includes('kishan'));

console.log(gameName.split('-'));



