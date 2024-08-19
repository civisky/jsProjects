let copyBtn = document.getElementById("copyBtn");
let inputText = document.getElementById("inputText");


copyBtn.addEventListener("click", function (e) {
    e.preventDefault();
    
    let copiedText = inputText.value;
    // check if input field is empty when the 'copy' button is clicked on
    if (copiedText == "") {
        displayDiv.style.display = "block";
        displayDiv.textContent = "Empty field, nothing to copy!";;
        setTimeout(() => {
            displayDiv.style.display = "none";
        }, 1500);
    } else {
        navigator.clipboard.writeText(copiedText);
        copyBtn.innerText = "Copied!";
        //display the copied text
        // displayDiv.style.display = "block";
        // displayDiv.textContent = copiedText;;
        // setTimeout(() => {
        //     displayDiv.style.display = "none";
        // }, 1500);



        alert("'" + copiedText + "' copied to clipboard!")

        //    sets a timer to revert the button and input field to default state after 3 seconds
        setTimeout(() => {
            inputText.value = "";
            copyBtn.innerText = "copy";
        }, 1500);
    }
    
})





