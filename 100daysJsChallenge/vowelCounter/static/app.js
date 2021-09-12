let checkBtn = document.getElementById("checkBtn");
let displayDiv = document.getElementById("displayDiv");

checkBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let inputText = document.getElementById("inputText").value;
    let inputTextLower = inputText.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
    let occuringVowels = [];
    for (x = 0; x < inputTextLower.length; x++){
        if (vowels.indexOf(inputTextLower[x]) !== -1) {
            vowelCount += 1;
            occuringVowels.push(inputTextLower[x]);
        } 
    }

    displayDiv.style.display = "block";
    displayDiv.textContent = '"' + inputText + '" has ' + vowelCount + " vowel(s) [" + occuringVowels + " ]";

    setTimeout(() => {
        displayDiv.style.display = "none";
        document.getElementById("inputText").value = "";
    }, 3000);

})



x = 0;
x = x + 1;
x += 1;