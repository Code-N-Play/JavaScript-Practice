let age = 18;

// if (age >= 18){
//     console.log("you are eligible");
// }
// else if (age == 18){
//     console.log("wow you are adult now ");
// }

// in above condition both conditions are true but compiler checks condition one by one so if compiler find one condition which is 
// which is true the it stopes the checking so in this conditon you use most relevent condition at top 

if(age == 18){
    console.log("wow you are now 18");
}
else if (age >=18){
    console.log("you are eligible ");
}
else {
    console.log("sorry but you are not eligible");
}