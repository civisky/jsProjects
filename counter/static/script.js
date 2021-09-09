let btnDecrease = document.getElementById("btnDecrease");
let btnIncrease = document.getElementById("btnIncrease");
let btnReset = document.getElementById("btnReset");

let counterValue = document.getElementById("countValue");



btnReset.addEventListener("click", function () {
    counterValue.innerText = 0;
    counterValue.style.color = "black";
})




btnIncrease.addEventListener("click", function () {
    counterValue.innerText = Number(counterValue.innerText) + 1;

    if (counterValue.innerText < 0) {
        counterValue.style.color = "red";
    } else counterValue.style.color = "green";

})


btnDecrease.addEventListener("click", function () {
    counterValue.innerText -= 1;
    if (counterValue.innerText < 0) {
        counterValue.style.color = "red";
    } else counterValue.style.color = "green";

})





