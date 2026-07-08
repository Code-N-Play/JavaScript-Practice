// basic while loop structure

// while(true){
//     console.log("neeraj"); 
// }


// 0 to 12 number printing using while loop
// let N = 12;
// let i = 0;

// while(i<N){
//     console.log(i);
//     i++;
// }



//  pop-up window in which input is mendatory
let username = "" ; 

while(username === "" || username === null){
    username = window.prompt("enter your name ");
}
console.log(`hello ${username}`);

