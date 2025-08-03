// Simple function declaration and usage example

// function myname() {
//     const name = 'himanshu sen'
//     return name,console.log(name); // Note: return and console.log together - only one works properly
// }

// console.log(myname()); // Logs undefined because console.log runs, but return is ignored
// myname()

//=====================================================================================================================

// Correct way to return and log value from function

// function myname() {
//     const name = 'himanshu sen';
//     console.log(name);  // Log inside the function
//     return name;        // Return value for external use
// }

// console.log(myname()); // Logs the returned value
// myname();              // Calls function again, logs inside it

//=====================================================================================================================

// Function to add two numbers, typecasted to ensure addition works with string numbers

// function addnum(num1,num2){
//     console.log(Number(num1)+Number(num2))
// }

// Test cases with different input types
// addnum(5,6)
// addnum(5,'6')
// addnum('5',6)
// addnum('5','6')
// addnum(5,'a')     // NaN output due to 'a'
// addnum('5','a')   // NaN output due to 'a'

// =====================================================================================================================

// Function to perform all arithmetic operations

// function para(a,b){
//     console.log(`addition is ${Number(a)+Number(b)}`);
//     console.log(`subtraction is ${Number(a)-Number(b)}`);
//     console.log(`multiply is ${Number(a)*Number(b)}`);
//     console.log(`divide is ${Number(a)/Number(b)}`);
// }

// para(6,5)
// console.log("=======================================");
// para(6,null)       // null is treated as 0
// console.log("=======================================");
// para(6,undefined)  // undefined leads to NaN in operations

//=====================================================================================================================

// Same para function but simplified to just return result

// function para(a,b){
//     let result = a + b 
//     return result         // Only returns addition result
// }

// const result = para(4,5)  // Stores returned result
// para(4,5)                 // Called again but output not used
// console.log(result)       // Prints stored result

// =====================================================================================================================

// Return + log inside and outside function

// function para(a, b) {
//     let result = a + b;
//     console.log("Inside function:", result); // Logs inside
//     return result;
// }

// const result = para(4, 5);  // Calls function and stores result
// console.log("Outside function:", result); // Logs outside

// console.log(para(1,2)) // Inline call and log

// =====================================================================================================================

// Basic function returning result, used multiple ways

// function addnum(num1,num2){
//     return num1+num2;
// }

// addnum(4,5)                      // No output, result unused
// const result = addnum(4,5)      // Store result
// console.log("result : " , result ) 
// console.log("result : " , addnum(4,5) ) // Direct inline output

// =====================================================================================================================

// Function using rest parameters - collects remaining args into array

// function CartPrice(val1, val2, ...num1){
//     return num1 // Returns array of values after first two
// }

// console.log(CartPrice(200,500,600)); // Outputs: [600]

// =====================================================================================================================

// Object definition and use in function

// const user = {
//     name : "himanshu sen",
//     pass : 7410
// }

// const user2 = {
//     name: "raj",
//     pass: 1234
// };

// Function to log object properties

// function objectuser(anyobject){
//     console.log(`hello i am ${anyobject.name}. this is my pass ${anyobject.pass}`)
// }

// objectuser(user)      // Using predefined object
// objectuser(user2);    // Another object
// objectuser({          // Inline object
//     name : "tera name",
//     pass : 7410
// })

// =====================================================================================================================

// Function that works with arrays

// const array = [0,1,2,3,4]

// function arrayuse(getarray){
//     return getarray[2]    // Returns 3rd element
// }

// console.log(arrayuse(array));         // Using predefined array
// console.log(arrayuse([0,1,2,3,4]));   // Using inline array

// =====================================================================================================================

// Step 1: Array of user objects with full info

// const users = [
//     {
//         name: "himanshu sen",
//         pass: 7410,
//         email: "himanshu@example.com",
//         phone: "9876543210",
//         role: "student"
//     },
//     {
//         name: "raj verma",
//         pass: 1234,
//         email: "raj@example.com",
//         phone: "9123456780",
//         role: "teacher"
//     },
//     {
//         name: "anita yadav",
//         pass: 5678,
//         email: "anita@example.com",
//         phone: "9998887776",
//         role: "admin"
//     }
// ];

// Step 2: Function to print user profile nicely

// function objectuser(anyobject) {
//     console.log(`🪪 User Profile`);
//     console.log(`Name     : ${anyobject.name}`);
//     console.log(`Password : ${anyobject.pass}`);
//     console.log(`Email    : ${anyobject.email}`);
//     console.log(`Phone    : ${anyobject.phone}`);
//     console.log(`Role     : ${anyobject.role}`);
//     console.log('-------------------------');
// }

// Step 3: Loop through array and print each user

// users.forEach(objectuser) // Calls objectuser for each item in array

// =====================================================================================================================
