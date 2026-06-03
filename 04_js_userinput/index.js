
// taking userinput 

// 1. window prompt( easy way only for learning )
// 2. input feild (proper way )

// method 1 (maybe currently not available )

// let usrname ;
// username = window.prompt(" whats your name " );

// console.log(username);

// method 2 

let username;
document.getElementById('submitbtn').addEventListener('click' , function(){
    username = document.getElementById('input').value;
    document.getElementById('mainhead').textContent = `Hello ${username}`;
});

