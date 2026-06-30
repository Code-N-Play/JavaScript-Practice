// let username = "Neeraj kumar"

// let firstname = username.slice(0 , 6) // alwase it excludes the last written indexx but at this time it works i dont know why
// let lastname = username.slice(7 ) // if u are not putting last value then it goes to end of the string 


// console.log(firstname);
// console.log(lastname);


// best way to do this 

// let username = "Neeraj kumar"

// let firstname = username.slice(0 , username.indexOf(" "))
// let lastname = username.slice(username.indexOf(" ") + 1)

// console.log(firstname);
// console.log(lastname);



// best way for email

let email = "neerajkumarmaurya248@gmail.com"

let username = email.slice(0 , email.indexOf("@"))
let extantion = email.slice(email.indexOf("@") + 1)

console.log(username)
console.log(extantion)
