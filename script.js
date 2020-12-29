// start out the game with a 16x16 grid
let gridSize = 16;
let shadeSquare = shadeClassic;
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


// when the "New Board" button is pressed, generate a new board of the requested size
const newBoardButton = document.getElementById("new-board");
newBoardButton.addEventListener("click", function () {
    initializeGrid(gridSize);
});



// when a user hovers over a square, shade it


// set up a new square grid with the given number of boxes per side
function initializeGrid(size) {
    const container = document.getElementById("grid-container");
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i=0; i<size*size; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.addEventListener("mouseover", shadeSquare);
        container.appendChild(div);
    }
}

function shadeClassic(e) {
    this.style.backgroundColor = "grey";
}

function shadeDarken(e) {

}

function shadeRainbow(e) {
    
}

function shadeErase(e) {

}