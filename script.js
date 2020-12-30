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
        this.style.backgroundColor = shadeClassic();
        break;
    
    case "darken":
        this.style.backgroundColor = shadeDarken(this.style.backgroundColor);
        break;
    
        case "rainbow": 
        this.style.backgroundColor = shadeRainbow();
        break;
    
    case "erase":
        this.style.backgroundColor = shadeErase();
        break;
    }
}

function getRGB(inputColor) {
    if (!inputColor) {
        return [255,255,255];
    }
    else {
        rgb = inputColor.slice(4,-1).split(",");
    }
    rgb[0] = parseInt(rgb[0]);
    rgb[1] = parseInt(rgb[1]);
    rgb[2] = parseInt(rgb[2]);
    return rgb;
}


function shadeClassic() {
    return "rgb(150,150,150)";
}

function shadeDarken(squareColor) {
    rgb = getRGB(squareColor);
    for (i = 0; i<rgb.length; i++) {
        rgb[i] -= 30;
    }
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
}

function shadeRainbow() {
    rgb = [Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)];
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
}

function shadeErase() {
    return "rgb(255,255,255)";
}