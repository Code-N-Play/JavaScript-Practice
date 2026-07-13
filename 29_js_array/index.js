let fruits = ["apple", "banana" , "coconet" ,"dragonfruit"]; // creating fruits named array 

console.log(fruits); // print the array

console.log(fruits[2]); // printing by index value

fruits.push("Elephant Apple"); // push new element in array
console.log(fruits); // print whole array

fruits.pop(); // pop last element of array
console.log(fruits); //print 

fruits.unshift("grapes"); // push element at begning
console.log(fruits); //print

fruits.shift(); // removes the first element from an array
console.log(fruits); //print

let number_of_fruits = fruits.length; // find array length
console.log(number_of_fruits); // print 

let find_index = fruits.indexOf("apple"); // finding index value by element 
console.log(find_index); // print

for(let i = 0 ; i < number_of_fruits ; i++){ // itrating array by for loop
    console.log(fruits[i]); // printing one by one each element
}

fruits.sort(); // sorting the array element in alphabetical order
console.log(fruits); // print

fruits.sort().reverse(); // sorting the array element in reverse alphabetical order
console.log(fruits); // print