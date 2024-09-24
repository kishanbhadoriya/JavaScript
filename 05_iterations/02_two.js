const coding = ["js", "ruby", "cpp", "java", "swift"]

coding.forEach( function (item) {
    // console.log(item);
})

coding.forEach( (item) => {
    // console.log(item);
})

function printme(item) {
    // console.log(item);
}
coding.forEach(printme)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languagefirstname: "python",
        languagename: "py"
    },
    {
        languagefirstname: "javascript",
        languagename: "js"
    },
    {
        languagefirstname: "C++",
        languagename: "cpp"
    },
    {
        languagefirstname: "swift",
        languagename: "Swift"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languagefirstname);
})