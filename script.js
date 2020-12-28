// start out the game with a 16x16 grid
let initialGridSize = 16;
initializeGrid(initialGridSize);



// set up a new square grid with the given number of boxes per side
function initializeGrid(size) {
    const container = document.getElementById("grid-container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(i=0; i<(size*size); i++) {
        let div = document.createElement("div");
        div.classList.add("item");
        container.appendChild(div);
    }
}