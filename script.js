console.log("Script started");

// Start the game
function start() {
    createSquare(50);
    createSquare(80);
    createSquare(100);
    console.log(Math.random() + 1000);
}

// Create a square
function createSquare(size) {
    // Create an element (div)
    let square = document.createElement("div");

    // Set some styles to make it a square
    square.style.background = "white";
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.position = "absolute";
    square.style.boderRadius = "16px";
    square.style.top = getRandomY() + "px";
    square.style.left = getRandomX() + "px";

    // Add it to the page
    document.body.appendChild(square);
}

// Generate random x cordinate 
function getRandomX() {
    let randX = Math.random() = window.innerWidth;
    return randX;
}

// Generate a random y codinate
function getRandomY() {
    let randY = Math.random() = window.innerHeight;
    return randY;

}