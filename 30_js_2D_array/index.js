
const array = [[1,2,3],
             [4,5,6],
             [7,8,9]];


array [0][0] = 'N'; // use to change element in 2D array 
// first [] is row position and second [] is column position
array [1][2] = 'O';
array [2][0] = 'P';


for (let row of array){ // for each loop 
    const rowString = row.join(' '); // use to join every row by space " "
    console.log(row); // printing
}