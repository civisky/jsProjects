let inputText = document.getElementById("inputText");
let counterDiv = document.getElementById("counterDiv");


inputText.addEventListener("input", function (e) {
    e.preventDefault();
    counterDiv.innerText = inputText.value.length;
    })

