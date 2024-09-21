// const tinderUser = new Object() // ---> Singelton Object

const tinderUser = {} // This is non Singelton Object 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Some@gamil.com",
    fullname: {
        userfullname: {
            firstname: "Kishan",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    }
]
user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // this use mostly when access the key from Database
// console.log(Object.values(tinderUser)); // this use mostly when access the value from Database
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "js in Hindi",
    price: "999",
    courseInstructure: "Kishan Singh"
}

// course.courseInstructure // We can access like that also

// another way of access courseInstructer is this

const {courseInstructure: instructure} = course

console.log(instructure);
