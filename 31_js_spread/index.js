let array = [ 1,2,3,4,5,6];

console.log(...array); // ... (3 dots are spread operator which is use to spread the array or more things)


let nums = [1,5,4,2,3,6,9,8,7];
let maxnum = Math.max(...nums); // spread then find maximum
let minnum = Math.min(...nums); // spread then find minimum
console.log(minnum);
console.log(maxnum);

let username = "neeraj";
let letters = [...username].join("."); // spread operator also works for string 
console.log(letters); // above we spread the string and join them by dot(.)


let fruits = ["apple" , "banana" , "coconet" , "dragon_fruit"];
let copy = [...fruits]; // we spread the array element in squre braces so it become a array same as privious
console.log(fruits);
console.log(copy);

let vegetable = ["Pateto" , "celery" , "tomato" , "cucumber"];
let merge = [...fruits, ...vegetable, "milk" , "egg" ]; // spread operator is also used for mearge two or more arrays
console.log(merge); // print
