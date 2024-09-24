// Imediately invoked function Expressions (IIFE)
// Note:- This is used when want to imediately execute that 
// function like:- 1. jese hi application launch ho db connection execute ho jaye 
// on that time (IIFE) function is useful.
// 2. Global scope does not pollute(disturbe) function inside. that's why we use IIFE. 

(function chai() {
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED 2`);
})();

((name) => {
    console.log(`DB CONNECTED THREE ${name}`);
    
})("Kishan")

// when execute multiple iife function for that we have need to stop execution use 
// ;(semicolon) for stop. 
// -> This is IIFE
// chai()

