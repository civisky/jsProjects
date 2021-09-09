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