console.log("Script started");

// Start the game
function start() {
    createSquare(50, "blue");
    createSquare(80, "red");
    createSquare(90, "white");
    createSquare(110, "green");
    console.log(Math.random() + 1000);
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
    console.log(square);
    square.remove();
    // Make a size pattern i.e. increase by same amount each time 10, 20, 30, 40, 50, 
}