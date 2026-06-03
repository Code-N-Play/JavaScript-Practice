

const PI = 3.1415; // let name se assing variable ko koi bhi areagera aakr change kr dega is liye conts ka use karo 
let r;
let circumphrence;

document.getElementById('btn').addEventListener('click',function(){
    r = document.getElementById('input').value;
    r = Number (r);
    circumphrence = 2 * PI * r ; 
    console.log(typeof  r);
    document.getElementById('result').textContent = `Result is ${circumphrence}`;
})