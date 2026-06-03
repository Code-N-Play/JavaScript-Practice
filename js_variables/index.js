let x = 140;
let name = "neeraj";
let email = "neeraj@gmail.com";
let age = 21;
let gpa = 7.88;
let onilne = true;


console.log(x);
console.log (`Hello world my name is ${name} `);
console.log(`My e-mail is ${email}`);
console.log (`I am ${age } years old`);
console.log (`I am currently maintaning ${gpa} CGPA in B tech`);


console.log(typeof online);
console.log ( typeof gpa); // to know data type of variable 

// practice to link html and js file 

document.getElementById("h1").textContent = name ;
document.getElementById("p1").textContent = email ;
document.getElementById("p2").textContent = age ;


document.getElementById("p3").textContent = `you are ${age} years old `;
