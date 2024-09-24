const user = {
    username: "Kishan",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to this website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Kanhiya"
// user.welcomeMessage()
// console.log(this);

function chai() {
    const username = "Kishan"
    console.log(this.username);
    // console.log(this);
}
//chai()

// const chai = () => {
//     let username = "Kishan"
//     console.log(this.username);
// }

// chai()

const addTwo = (num1, num2) => {
    return num1 + num2 // Explicit return
}

// console.log(addTwo(3, 4));

const addTwo2 = (num1, num2) => (num1 + num2) // implicit return

// console.log(addTwo2(3, 4));

const addTwo3 = (num1, num2) => ({username: "Kishan"})

console.log(addTwo3(3, 4));

const myArray = [2, 3, 5, 7, 8]

myArray.forEach(function() {})

// myArray.forEach(() => ())
