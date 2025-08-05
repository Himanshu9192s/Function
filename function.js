// Function returning and logging name
/*
function myname() {
    const name = 'himanshu sen'
    return name, console.log(name);
}

console.log(myname());
myname()
*/

//=====================================================================================================================

// Proper function with return and log inside
/*
function myname() {
    const name = 'himanshu sen';
    console.log(name);  // Log inside function
    return name;        // Return name
}

console.log(myname()); // Logs returned value and internally log value 
myname();              // Logs internally
*/

//=====================================================================================================================

// Addition function with string and number handling
/*
function addnum(num1, num2){
    console.log(Number(num1) + Number(num2))
}

addnum(5,6)
addnum(5,'6')
addnum('5',6)
addnum('5','6')
addnum(5,'a')
addnum('5','a')
*/

// =====================================================================================================================

// Arithmetic operations using Number conversion
/*
function para(a,b){
    console.log(`addition is ${Number(a)+Number(b)}`);
    console.log(`subtraction is ${Number(a)-Number(b)}`);
    console.log(`multiply is ${Number(a)*Number(b)}`);
    console.log(`divide is ${Number(a)/Number(b)}`);
    console.log(`reminder is ${Number(a)%Number(b)}`);
}

para(6,5)
console.log("=======================================");
para(6,null)
console.log("=======================================");
para(6,undefined)
*/

//=====================================================================================================================

// Return-only version of para function
/*
function para(a,b){
    let result1 = a + b 
    console.log("result_1 : ",result1); // comment if you want internal log
    return result1
}

const result = para(4,5); // if log inside the fn is comment then no prblem but if not then every time we call fn log internal was execute
para(4,4)
console.log("result : " , result)
*/

// =====================================================================================================================

// Function returning and logging addition result
/*
function para(a, b) {
    let result = a + b;
    console.log("Inside function:", result);
    return result;
}

// const result = para(4, 5);
// console.log("Outside function:", result);
console.log(para(1,2)) // Execute value two times First, inside the function log, second 

*/
// =====================================================================================================================

// Simple function returning addition
/*
function addnum(num1,num2){
    return num1+num2;
}

addnum(4,5)
const result = addnum(4,5)
console.log("result : " , result )
console.log("result : " , addnum(4,5) )
*/

// =====================================================================================================================

// Function using rest parameters
/*
function CartPrice(val1, val2, ...num1){
    return num1
}

console.log(CartPrice(200,500,600));
*/

// =====================================================================================================================

// Passing object to function and accessing its properties
/*
const user = {
    name : "himanshu sen",
    pass : 7410
}

const user2 = {
    name: "raj",
    pass: 1234
};

function objectuser(anyobject){
    console.log(`hello i am ${anyobject.name}. this is my pass ${anyobject.pass}`)
}

objectuser(user)
objectuser(user2);
objectuser({
    name : "tera name",
    pass : 7410
})
*/

// =====================================================================================================================

// Accessing array elements via function
/*
const array = [0,1,2,3,4]

function arrayuse(getarray){
    return getarray[2]
}

console.log(arrayuse(array));
console.log(arrayuse([0,1,2,3,4]));
*/

// =====================================================================================================================

// Printing user profiles from array of objects
/*
const users = [
    {
        name: "himanshu sen",
        pass: 7410,
        email: "himanshu@example.com",
        phone: "9876543210",
        role: "student"
    },
    {
        name: "raj verma",
        pass: 1234,
        email: "raj@example.com",
        phone: "9123456780",
        role: "teacher"
    },
    {
        name: "anita yadav",
        pass: 5678,
        email: "anita@example.com",
        phone: "9998887776",
        role: "admin"
    }
];

function objectuser(anyobject) {
    console.log(`🪪 User Profile`);
    console.log(`Name     : ${anyobject.name}`);
    console.log(`Password : ${anyobject.pass}`);
    console.log(`Email    : ${anyobject.email}`);
    console.log(`Phone    : ${anyobject.phone}`);
    console.log(`Role     : ${anyobject.role}`);
    console.log('-------------------------');
}

users.forEach(objectuser)
*/

// =====================================================================================================================




