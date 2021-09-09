

let counter = Number(document.getElementById("counter").textContent);
let subtractBtn = document.getElementById("subtractBtn");
let resetBtn = document.getElementById("resetBtn");
let addBtn = document.getElementById("addBtn");




subtractBtn.addEventListener("click", function(e) {
    e.preventDefault();
    counter -= 1;
    document.getElementById("counter").innerHTML = counter;
    // console.log(counter);
    
});

resetBtn.addEventListener("click", function(e) {
    e.preventDefault();
    counter = 0;
    document.getElementById("counter").innerHTML = counter;



    // console.log(counter);
    
});

addBtn.addEventListener("click", function(e) {
    e.preventDefault();
    counter += 1;
    document.getElementById("counter").innerHTML = counter;

    // console.log(counter);
    
});




