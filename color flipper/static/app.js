const colorList = ["red", "yellow", "blue", "purple", "green", "orange"];

let btn = document.getElementById("colorPicker");

document.querySelector(".color-display").innerHTML = "Background Color: White";


btn.addEventListener("click", function(){

    let randNum = Math.floor(Math.random()*colorList.length);
document.body.style.backgroundColor = colorList[randNum];
document.querySelector(".color-display").innerHTML = "Background Color: " + colorList[randNum];
    
})


