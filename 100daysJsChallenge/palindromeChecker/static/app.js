let checkBtn = document.getElementById("checkBtn");


checkBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let inputText = document.getElementById("inputText").value;
    let reverseText = "";
    for (x = 1; x <= inputText.length; x++){
        reverseText += inputText[inputText.length - x]
    }

    if (reverseText == inputText) {
        alert('"' + inputText + '" is a palindrome');
    } alert('"' + inputText + '" is not a palindrome');

});





