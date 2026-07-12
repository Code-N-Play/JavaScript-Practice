

// function iseven(num){

//     if (num % 2 == 0){ // check is the num is even or not 
//         return true;
//     }
//     else{
//         return false;
//     }

// }

// console.log(iseven(5));



// user input then check the num is even or not  

let number;

document.getElementById("subbtn").addEventListener('click',function(){
    number = document.getElementById("input").value;
    iseven(number);

})

function iseven(number){
        if(number % 2 == 0 ){
            document.getElementById("pera").textContent = "Enterd number is even ";
        }
        else{
            document.getElementById("pera").textContent = "Enterd number is not a  even ";
        }
    }

