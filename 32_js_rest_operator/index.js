
// rest operator is opposit of spread operator but it use only in function 



// function 
function add(...numbers){ // by using rest operator in function you can use n numbers of arguments (no boundary)
    let result = 0; 
    for (let number of numbers){ // for each loop 
        result = result + number;
    }
    return result; // returning result
}

const total = add(1,2,5,4,3); // caling function with n number of perameters 
console.log(total);  // print




// average function 
function average(...inputs){

    let result = 0 ;
    for(let input of inputs){
        result = result + input ; 
    }
    result = result / inputs.length; // result is devided by total number of perameter to get average 
    return result  ;  // returning result 
}

const ans = average(75,45,85,75,95,20);
console.log (ans);



// combine strings function  (lanthy method)
function combine(...usernames){

    let full_name = "";
    for(let username of usernames){
        full_name = full_name + username;
    }
    return full_name ;
}

const User = combine("neeraj" , " kumar" , " maurya");
console.log(User);




// combine strings function  (easy method)
function combinestr(...user){
    return user.join(" ");
}

const username1 = combinestr ("neeraj","kumar","maurya");
console.log (username1);