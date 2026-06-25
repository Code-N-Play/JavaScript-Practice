 let randomnum  =Math.floor( Math.random() * 6) + 1; //random number1 to 6 

// explanation 
// math.random ka use random number generate krne ke liye iya 
// math.random se 0 se 1 ke bich ki random number generate hoti hai to isko 6 se multiply kr diya taki ye 0 se 5 tak ki random number 
// generate kare then 
// lakin abhi bhi random number decimal mai hai tomath.floor ka use krke usko whole number mai convert kr liya 
// but mujhe 1 se 6 tak number generate krne the to maine +1 kr diya kuki abhi 0 se 5 tak generate ho reha hai 1 add krne pr 
// 1 se 6 hoga   



// let min = 1;
// let max = 6;
// let randomnum  =Math.floor( Math.random() * max) + min;



//for range between 50 to 100 
// let min = 50;
// let max = 100;
// let randomnum = Math.floor(Math.random() * (max - min)) + min; 



document.getElementById("label").innerText = randomnum;


// console.log(randomnum);