let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
let generateBtn = document.getElementById("generateBtn");
let colorDislay = document.getElementById("colorDisplay");
// let bgColor = document.body.style.backgroundColor;


generateBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let bgColor = "#"

    for (i = 0; i < 6; i++){
        randNum = Math.floor(Math.random() * hex.length);
        bgColor += hex[randNum];

    }
    document.body.style.backgroundColor = bgColor;
    colorDislay.innerText = bgColor;
    colorDislay.style.color = bgColor;
})













console.log(document.body.style.backgroundColor);
