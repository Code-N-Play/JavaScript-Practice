

//.................... without method chaining...................

let username = "";

document.getElementById("sub_btn").addEventListener( 'click' , function(){
    username = document.getElementById("input_field").value;

    username = username.trim(); // this line removes any space which is present in starting or ending 

    let first = username.charAt(0); // this line selects the first char from the username 
    first = first.toUpperCase(); // this line make first char capital

    let rest_char = username.slice(1); // this line slice the first char from the username and asing in variable
    rest_char = rest_char.toLowerCase(); // this line makes rest all char small letter

    username = first + rest_char; // here we concatinate first char and rest char together 

    document.getElementById("pera").textContent = username; // print
})



//..................... with method chanining........................

let username1 = "";

document.getElementById("sub_btn2").addEventListener('click', function(){
    username1 = document.getElementById("input_field2").value;

    username1 = username1.trim().charAt(0).toUpperCase() + username1.trim().slice(1).toLowerCase();

    document.getElementById("pera2").textContent = username1;
})