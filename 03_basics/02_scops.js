
// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner", a);
    
} 

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Kishan"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const username = "Kishan"
    if (username === "Kishan") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++ Interesting +++++++++++++++
console.log(addOne(5));


function addOne(num) {
    return num + 1
}
console.log();

// console.log(addTwo(5)); // this will give error


const addTwo = function (num) {
    return num + 2
}

