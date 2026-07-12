// basic function with pera and agrs

function happybirthday(username,age){ // perameters

    console.log("Happy birthday to you");
    console.log(`Happy birthday dear ${username}`);
    console.log(`you are ${age} years old`);
}

happybirthday ("Neeraj",22); // arguments


// function with returne 

function add(x,y){ // perameters x and y 
    let result = x+y; // perform op and store in variable
    return result; // returne the variable 
}

let answer = add(2,4); //pass the arguments and store in another veriable
console.log(answer); // print the veriable 





//same with easy approche 

function addition(x,y){ // addition function
    return x+y;
}
console.log(addition(2,4));

function sub(x,y){ // subtraction function 
    return x-y;
}
console.log(sub(2,4));

function mul(x,y){ //multiplication function
    return x*y;
}
console.log(mul(2,4));

function div(x,y){ // Division function 
    return x/y;
}
console.log(div(2,4));