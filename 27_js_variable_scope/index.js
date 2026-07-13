//variable basics

let x = 3;
// let x = 2; we can't redeclaer the same variable  but ............
x = 2; // but reassign the same variable with different value ...

console.log (x);


// scope  =  1.local 
//           2.global

// use of local variable

function print(){ // function making
    let y = 10;    // in function if we creat some veriable then it is known as local veriable it can't access from outside the function
    console.log(y);
}

print(); // function call




// use of global veriable

let z = 12;        // if we creat some veriable outside then it is known as global veriable it  access from outside and inside the function
console.log(`from outside ${z}`);

function print2(){ // function making

    console.log(`from inside ${z}`);
}

print2(); // function call


// same name veriable in outside and inside 

let A = 13;

function print3(){ // function making
    let A = 15; // if same name veriable available globaly and localy then compiler uses local veriable if local not available then it use global veriable 
    console.log(A);
}

print3(); // function call
