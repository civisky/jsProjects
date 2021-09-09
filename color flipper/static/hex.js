const hexColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];

let btn = document.getElementById("colorPicker");
document.querySelector(".color-display").innerHTML = "Background Color: White";



btn.addEventListener("click", function () {

    let bgColor = "#";
    for (i = 0; i < 6; i++) {
        let randNum = Math.floor(Math.random() * hexColor.length);
        bgColor += hexColor[randNum];

    }

    document.body.style.backgroundColor = bgColor;
    document.querySelector(".color-display").innerHTML = "Background Color: " + bgColor;

})


