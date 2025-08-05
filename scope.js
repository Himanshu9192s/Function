 // scope nested

/*

function one(){

    const name = "himanshu one"

    function two(){
        const id = 123;
        console.log(name);

    }

    two()

}

one()

*/


//=================================================================================================

/*

if(true){

    const name = "me";

    if (name === "me") {

        const realname = "mia";
    
        console.log(name)

    }

    console.log("name inside ", name);
    
}

*/

//=================================================================================================



// Define an object with a nested object and a method


/*
const one = {
    newone: {  // ✅ Use '=' in JS object declarations, not ':'
        name: "himanshu",
        id: 741
    },

    message: function(call) {  // ✅ Proper method syntax
        console.log(`this is ${call.name}, my id is ${call.id}`);
    }
};

// Call the function using the nested object as an argument
one.message(one.newone);


*/
//=================================================================================================

/*
const one = {
        name: "himanshu",
        id: 741,
    

    message: function() { 
     console.log(`this is ${this.name}, my id is ${this.id}`);
    }
};

one.message();

*/


//=================================================================================================


/*
const one = {
        name: "himanshu",
        id: 741,
    

    message: function() { 
     console.log(`this is ${this.name}, my id is ${this.id}`);
    }
};

one.message();
one.name  = "bull";
one.message();

*/

//========================================================================================


/*
const one = {
        name: "himanshu",
        id: 741,
    

    message: function() { 
     console.log(`this is ${this.name}, my id is ${this.id}`);
     console.log(this)
    }
};

one.message();
one.name  = "bull";
one.message();

*/

//========================================================================================

/*

const one = {
        name: "himanshu",
        id: 741,
    

    message: function() { 
     console.log(`this is ${this.name}, my id is ${this.id}`);
     
    }
};

// one.message();
console.log(this)

*/


//========================================================================================


 