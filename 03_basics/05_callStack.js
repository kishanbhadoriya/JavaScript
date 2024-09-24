// Topic---> Execute Code  + Call Stack
// Javascript Execution Context is three types
// 1. Global Execution Context --> Firstly allocate 'this'
// 2. Function Execution Context
// 3. Eval Execution Context

// 1. Memory Creation Phase --> Many of the people says (Creation Phase)
// 2. Execution Phase ---> Operation hota hai like --> +, -

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(4, 3)

// In this prgram Execution phase go in some steps.

// 1. Global Execution ---> this

// 2. Memory Phase --> collect all variable and store it like in val1 firstly 
// store undefined and same as val2 --> undefine and addNum ---> defination 
// jayegi, result1 me --> undefine jayega and result2 ----> undefine
// this is first phase that is Memory creation phase. This is a first cycle

// 3. ---> Execution Phase  ----> Second Cycle
// val1 --> 10
// val2 ---> 5
// addNum--> addNum alag executional context create karega
// addNum ---> new variable environment + execution thread will create
// jitne bar function call hota hai utne bar cycle1 and cycle2 execute 
// hogi , total will return in Global context.
// After execution it will delete 3rd phase

// call Stack
// it will work like satck



