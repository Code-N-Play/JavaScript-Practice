// let day = "lolipop"; 

// switch(day){
//     case 1 :
//         console.log("monday");
//         break
//     case 2 :
//         console.log("Tusday");
//         break
//     case 3 :
//         console.log("wednesday");
//         break
//     case 4 :
//         console.log("thusday");
//         break
//     case 5 :
//         console.log("friday");
//         break
//     case 6 :
//         console.log("saturday");
//         break
//     case 7 :
//         console.log("sunday");
//         break
//     default :
//         console.log(`${day} is not a day `)
// }

let marks = 33;
let grade 

switch(true){
    case marks >= 90 :
        grade = "A"
        break
    case marks >= 80 :
        grade = "B"
        break
    case marks >= 70 :
        grade = "C"
        break
    case marks >= 60 :
        grade = "D"
        break
    case marks >= 33 :
        grade = "E"
        break
    case marks < 33 :
        grade = "Fail"
        break
}

console.log(grade);