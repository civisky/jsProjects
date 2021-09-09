

let displayDiv = document.getElementById("productDisplay");
let displayDivStyle = document.querySelector("#productDisplay")
console.log(displayDiv);

let productsButton = document.getElementById("viewProducts");

productsButton.addEventListener("click", displayProduct)


function displayProduct(e){
    displayDivStyle.style.display = "block"
    let productDisplay = [];

    for (i = 0; i<mobilePhones.length; i++){
        productDisplay.push(mobilePhones[i]);

    }

    displayDiv.innerText = productDisplay[0];
    console.log(productDisplay[0].innerText);


}