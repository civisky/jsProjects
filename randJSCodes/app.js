console.log("hello");


// password validator 
// checks if password is less than 8 characters
// if password contains empty space
// if password contais username

// method 1

// function isValidPass (password, userName){
// if(password.length < 8){
//     return false;
// }
// if (password.indexOf(" ") !==-1){
//     return false;
// }
// if (password.indexOf(userName) !==-1){
//     return false;
// }

// return true;

// }


// method 2

// function isValidPass (password, userName){
//     passLength = password < 8; 
//     containSpace = password.indexOf(" ") !==-1;
//     containUser = password.indexOf(userName) !==-1;

//     if(passLength || containSpace || containUser){
//         return false;
//     } return true;
// }

// isValidPass("isaacPc1kk08", "isaacPc");


// FUNCTION TO FIND find Average

// function findAverage(numbers){
//  let total = 0;
// for (let num of numbers){
//     total += num;
// }

// return total/numbers.length;

// }

//  Pangram Function

// function isPangram (sentence){
// let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// for (let char of alphabets){
//     if (sentence.indexOf(char) ===-1){
//         console.log("false");
//         return false;

//     } 

// }

// console.log("true");
//     return true; 
// }


// HIGHER ORDER FUNCTIONS

// function areaTriangle(b, h) {

//     return function halve(x) {
//         return x * b * h
//     }
// }

// let triangle = areaTriangle(4, 5);


// for each function

let randNum = [];
for (i = 0; i < 15; i++){
    randNum[i] = Math.ceil( Math.random()*13);
    }

randNum.forEach(x => {
    console.log(x);
});