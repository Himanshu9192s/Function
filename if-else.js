
// // <, >, <=, >=, ==, ===, !=,!==

// const myvalue = 1000;

// if(myvalue > 900){
//     console.log(`yes my value `);
    
// }else if(myvalue < 900){
//     console.log(`this is my value`);
    
// }


// if(myvalue > 900){
//     const boy = "hima"
//     console.log(boy) 
// }

// // console.log(boy);




const userLoggedIn = false
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true


if(userLoggedIn && debitCard){

    console.log(`you are applicable`);

}


if(userLoggedIn || loggedInFromGoogle){
    console.log(`you are allowed`);
    
}

if (userLoggedIn || loggedInFromGoogle) {
    
    console.log(`try with email`);
    
}