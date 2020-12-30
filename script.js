// start out the game with a 16x16 grid
let gridSize = 16;
shadeMode = "classic";
initializeGrid(gridSize);

// listen for the requested grid size and update live
const sizeNumber = document.getElementById("size-number");
const sizeSlider = document.getElementById("size-slider")

sizeNumber.addEventListener("input", function () {
    gridSize = this.value;
    initializeGrid(gridSize);
});

sizeSlider.addEventListener("input", function () {
    gridSize = this.value;
    initializeGrid(gridSize);
});

// change shading mode depending on user settings
const sketchModeButtons = document.querySelectorAll("button.sketch-style");
sketchModeButtons.forEach(sketchModeButton => {
    sketchModeButton.addEventListener("click", function () {shadeMode = sketchModeButton.id;});
});

// when the "Reset" button is pressed, generate a new board of the requested size
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
    initializeGrid(gridSize);
});


// set up a new square grid with the given number of boxes per side
function initializeGrid(size) {
    const container = document.getElementById("grid-container");
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i=0; i<size*size; i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        div.addEventListener("mouseover", shadeSquare);
        container.appendChild(div);
    }
}

function shadeSquare(e) {  
    switch(shadeMode) {
    case "classic": 
        shadeClassic(this);
        break;
    
    case "darken":
        shadeDarken(this);
        break;
    
        case "rainbow": 
        shadeRainbow(this);
        break;
    
    case "erase":
        shadeErase(this);
        break;
    }
}

function shadeClassic(square) {
    square.style.backgroundColor = "grey";
}

function shadeDarken(square) {

}

function shadeRainbow(square) {
    
}

function shadeErase(square) {
    square.style.backgroundColor = "white"
}