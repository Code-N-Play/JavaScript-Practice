const button = document.getElementById ("button");
const lable = document.getElementById ("lable");
let min = 1;
let max = 6;
let randomnum  ;
button.onclick = function(){
    randomnum = Math.floor(Math.random() * max) + min;
    lable.textContent = randomnum;
} 


// for 3 dies

// const button = document.getElementById ("button");
// const lable1 = document.getElementById ("lable1");
// const lable2 = document.getElementById ("lable2");
// const lable3 = document.getElementById ("lable3");
// let min = 1;
// let max = 6;
// let randomnum1  ;
// let randomnum2  ;
// let randomnum3  ;

// button.onclick = function(){
//     randomnum1 = Math.floor(Math.random() * max) + min;
//     randomnum2 = Math.floor(Math.random() * max) + min;
//     randomnum3 = Math.floor(Math.random() * max) + min;

//     lable1.textContent = randomnum1;
//     lable2.textContent = randomnum2;
//     lable3.textContent = randomnum3;
// } 