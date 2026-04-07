console.log("Script started");
let currentSize = 50;
let timeLeft = 20;

// Start the game
function start() {
    createSquare(50, "blue");
    createSquare(60, "red");
    createSquare(70, "white");
    createSquare(80, "green");
    console.log(Math.random() + 1000);
    setInterval(updateTimer, 1000);
}

function updateTimer() {
    let timer = document.getElementById("timer");
    timeLeft = timeLeft - 1;
    timer.innerText = timeLeft + "s";
    if(timeLeft <= 0) {
        alert("Game Over");
    }
}

// Create a square
function createSquare(size, color) {
    // Create an element (div)
    let square = document.createElement("div");

    // Set some styles to make it a square
    square.style.background = color;
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.position = "absolute";
    square.style.borderRadius = "16px";
    square.style.top = getRandomY() + "px";
    square.style.left = getRandomX() + "px";

    // Add it to the page
    document.body.appendChild(square);

    // Add click event
    square.addEventListener("click", handleClick);
}

// Generate random x cordinate 
function getRandomX() {
    let randX = Math.random() * window.innerWidth;
    return randX;
}

// Generate a random y codinate
function getRandomY() {
    let randY = Math.random() * window.innerHeight;
    return randY;
}

// Handle the player clicking a square
function handleClick(event) {
    let square = event.target;
    console.log(square.style.width);
    if(square.style.width == currentSize + "px"){
        console.log("first square");
        square.remove();
        currentSize = currentSize + 10;
    }

}