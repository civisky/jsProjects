let statusImg = document.getElementById("statusImg");
let statusAlert = document.getElementById("messageAlert");

let connected = "./static/images/wifionn.jpg"
let disconnected = "./static/images/noInternet.png"
    


window.addEventListener("load", checkConnStatus());

function checkConnStatus() {
    setInterval(checkStatus, 1500);
    
}

function checkStatus(e) {
    if (window.navigator.onLine) {
        statusImg.src = connected;
        statusAlert.innerText = "Connected!";
        statusAlert.style.color = "blue"
        
    } else {
        statusImg.src = disconnected;
        statusAlert.innerText = "No internet Connection!";
        statusAlert.style.color = "red"
         
    }
}

