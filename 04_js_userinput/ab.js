
let username;

document.getElementById('submibtn').addEventListener('click',function(){
    username = document.getElementById('inputb').value;
    document.getElementById('mainhead').textContent = `${username} Hello`;
});