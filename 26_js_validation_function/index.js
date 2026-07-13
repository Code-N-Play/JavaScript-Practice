

let email ;

document.getElementById("subbtn").addEventListener('click', function(){
    email = document.getElementById("input").value;
    email_validation(email);
})

function email_validation(X){
    if (X.includes("@") && X.includes(".com") ){
        document.getElementById("pera").textContent = "enterd email is a valid email";
    }
    else{
        document.getElementById("pera").textContent = "enterd email is not a valid email";
    }
}