

let is_login = false ;
let username ;
let password ; 

while(!is_login){
    username = window.prompt("plz enter your username");
    password = window.prompt("plz enter your password");

    if(username ==="Neeraj"|| password ==="Neeraj@123"){
        console.log(`welcome ${username}`);
        is_login = true;
    }
    else{
        console.log("tyr again");
    }
}



