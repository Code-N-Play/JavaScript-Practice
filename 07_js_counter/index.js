const Lable = document.getElementById('label')
let count = 0;

document.getElementById('increseBtn').onclick = function(){
    count = count + 1;
    Lable.textContent = count;
};

document.getElementById('resetBtn').onclick = function(){
    count = 0;
    Lable.textContent = count;
};

document.getElementById('decreseBtn').onclick = function(){
    count = count - 1;
    Lable.textContent = count;
};


//Method 2

// const Increse = document.getElementById('increseBtn');
// const Reset = document.getElementById('resetBtn');
// const Decrese = document.getElementById('decreseBtn');

// const Lable = document.getElementById('label')
// let count = 0;

// Increse.onclick = function(){
//     count = count + 1;
//     Lable.textContent = count;
// };

// Reset.onclick = function(){
//     count = 0;
//     Lable.textContent = count;
// };

// Decrese.onclick = function(){
//     count = count - 1;
//     Lable.textContent = count;
// };