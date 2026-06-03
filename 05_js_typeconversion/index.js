// type conversion.................

// let age = 256; // here age variable is number type 

// age = String (age); // and here we change the type from number to string 
// age = age + 1; // here we perform string concatination 

// document.getElementById('pera').textContent = age;

let age ;

document.getElementById('btn').addEventListener('click' , function(){
    age = document.getElementById('inputfield').value; // due to input this is an string 
    // age = age +1; // so here string is concatinated 
    age = Number (age); // here we converted into it number again 
    age = age * 2;
    document.getElementById('pera').textContent = `the value you enterd ${age}`;
});