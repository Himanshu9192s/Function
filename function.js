// function myname() {

//     const name = 'himanshu sen'
//     return name,console.log(name);
    

// }

// console.log(myname());
// myname()

//=====================================================================================================================

// function myname() {
//     const name = 'himanshu sen';
//     console.log(name);  // This logs inside the function
//     return name;        // This makes the function return the name
// }

// console.log(myname()); // This logs the returned value
// myname()


//=====================================================================================================================

// function addnum(num1,num2){
//     console.log(Number(num1)+Number(num2))
// }

// addnum(5,6)
// addnum(5,'6')
// addnum('5',6)
// addnum('5','6')
// addnum(5,'a')
// addnum('5','a')


// =====================================================================================================================


// function para(a,b){

//     console.log(`addition is ${Number(a)+Number(b)}`);
//     console.log(`subtraction is ${Number(a)-Number(b)}`);
//     console.log(`multiply is ${Number(a)*Number(b)}`);
//     console.log(`divide is ${Number(a)/Number(b)}`);
    
// }

// para(6,5)
// console.log("=======================================");
// para(6,null)
// console.log("=======================================");
// para(6,undefined)

//=====================================================================================================================


// function para(a,b){

//     // console.log(`addition is ${Number(a)+Number(b)}`);
//     // console.log(`subtraction is ${Number(a)-Number(b)}`);
//     // console.log(`multiply is ${Number(a)*Number(b)}`);
//     // console.log(`divide is ${Number(a)/Number(b)}`);
    
//     let result = a + b 
//     return result
// }

// const result = para(4,5)
// para(4,5)

// console.log(result)

// =====================================================================================================================


// function para(a, b) {
//     let result = a + b;
//     console.log("Inside function:", result);
//     return result;
// }

// const result = para(4, 5);  // result = 9
// console.log("Outside function:", result);

// console.log(para(1,2))


// =====================================================================================================================


// function addnum(num1,num2){

//     return num1+num2;

// }

// addnum(4,5)

// const result = addnum(4,5)

// console.log("result : " , result )

// console.log("result : " , addnum(4,5) )


// =====================================================================================================================


// function CartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(CartPrice(200,500,600));


// =====================================================================================================================

// const user = {
//     name : "himanshu sen",
//     pass : 7410

// }

// const user2 = {
//     name: "raj",
//     pass: 1234
// };



// function objectuser(anyobject){

//     console.log(`hello i am ${anyobject.name}. this is my pass ${anyobject.pass}`)
// }

// objectuser(user)

// objectuser(user2);

// objectuser({
//     name : "tera name",
//     pass : 7410

// })

// =====================================================================================================================

// const array = [0,1,2,3,4]

// function arrayuse(getarray){

//     return getarray[2]
// }

// console.log(arrayuse(array));
// console.log(arrayuse([0,1,2,3,4]));



// =====================================================================================================================

// Step 1: Array of users
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

// // Step 2: Function to print user info
// function objectuser(anyobject) {
//     console.log(`🪪 User Profile`);
//     console.log(`Name     : ${anyobject.name}`);
//     console.log(`Password : ${anyobject.pass}`);
//     console.log(`Email    : ${anyobject.email}`);
//     console.log(`Phone    : ${anyobject.phone}`);
//     console.log(`Role     : ${anyobject.role}`);
//     console.log('-------------------------');
// }

// // Step 3: Loop through all users
// users.forEach(objectuser) // This will call your function for each user


// =====================================================================================================================


