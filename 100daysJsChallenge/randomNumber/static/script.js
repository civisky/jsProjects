let counter = Number(document.getElementById("counter").textContent);
let generateBtn = document.getElementById("generateBtn");



generateBtn.addEventListener("click", function(e){
    e.preventDefault();
    let randNum = Math.floor((Math.random()*100));
    document.getElementById("counter").textContent = randNum;
    
    }
)







console.log(generateBtn);
console.log(document.getElementById("counter").innerText);