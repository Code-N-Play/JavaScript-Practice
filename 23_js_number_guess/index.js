let random_num = Math.floor((Math.random()*10) +1);

let num ;
let is_guessed = false ;
const output = document.getElementById("pera");

document.getElementById("submit_btn").addEventListener('click' , function(){
    num = document.getElementById("input_field").value;
    if (num == random_num){
        output.textContent = "you Guessed it";
        is_guessed = true;
    }
    else if(num > random_num){
        output.textContent = "Too HIGH" ;
    }
    else if (num < random_num){
        output.textContent = "Too LOW" ;
    }
});
 

// using window prompt 

// is_guessed = false; 

// while(!is_guessed){
//     input = window.prompt("Guess the Number ");

//     if(input == random_num){
//         console.log("yeh... you guess it ");
//         is_guessed = true;
//     }
//     else if(input > random_num){
//         console.log("your guess is too high" );
//     }
//     else if(input < random_num){
//         console.log("your guess is too low" );
//     }
// }