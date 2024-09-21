// Singelton
// Object.create

// Object literels

const mySym = Symbol("Key1");

const jsUser = {
    name: "Kishan",
    "full name": "Kishan Singh Bhadoriya",
    mySym: "myKey1",
    [mySym]: "myKey1",
    age: 33,
    location: "Bhind",
    email: "kishan@google.com",
    isLoggedIn: false,
    lastLogedin: ["Monday, Saturday"]
}

// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);

jsUser.email = "kishan@chatgpt.com"
// console.log(jsUser.email);
// Object.freeze(jsUser);
jsUser.email = "kishan@microsft.com"
// console.log(jsUser.email);
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS uSer");
}

console.log(jsUser.greeting);

jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greetingTwo());
