const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)
// console.log(myTotal);

const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Javascript",
        price: 5999
    },
    {
        itemName: "SwiftUI",
        price: 6999
    },
    {
        itemName: "WebDevelpment",
        price: 3999
    },
    {
        itemName: "Backend",
        price: 2999
    },
]
// const priceToPay = shoppingCart.reduce((acccc, item) => {
//     console.log(`acc: ${acccc} and currVal: ${item.price}`);
//     return acccc + item.price
// }, 0)
// console.log(priceToPay);

const priceToPay = shoppingCart.reduce((acccc, item) => acccc + item.price, 0)
console.log(priceToPay);
