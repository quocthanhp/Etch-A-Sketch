const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorWell");
let color = "white";
let eraser = false;
let rainbow = false;
const DEFAULT_SIZE =16;

// Create nxn grid of square divs
function createGrid(rows, columns) {
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (let i = 0; i < rows * columns; i++) {
        cell = document.createElement("div");
        cell.classList.add('grid-item');
        grid.appendChild(cell);
    }
}

/* Clear all set up */
function clearGrid() {
   color = "";
   rainbow = false;
   eraser=false;
   grid.innerHTML = '';
}

/* Choose random r, b, g value */
function getRandomColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r},${b},${g})`;
}

// Draw
drawBtn = document.querySelector("#draw");
drawBtn.addEventListener("mousedown", () => {
    eraser=false;
    rainbow=false;
    drawBtn.style.backgroundColor = "#55BCC9";
    colorPicker.addEventListener("input", getColor);
    hover();
});

// Get color chosen by user 
function getColor(event) {
    color = event.target.value
}

// Choose rainbow color
rainbowBtn = document.querySelector("#rainbow");
rainbowBtn.addEventListener("click", () => {
    drawBtn.style.backgroundColor = "#97CAEF"; 
    rainbow=true;
    hover();
});

// Hover handling
function hover() {
    cells = document.querySelectorAll('.grid-item');
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", function(e) {
            if (!eraser && !rainbow) {
                // Draw color chosen by user
                e.target.style.backgroundColor = color;
            } else if (rainbow) {
                // Draw rainbow color
                e.target.style.backgroundColor = getRandomColor();
            } else {
                // Erase
                e.target.style.backgroundColor = null;
            } 
            return;
        });
    });
}   

// Make new grid 
setGridBtn = document.querySelector("#new-grid");
setGridBtn.addEventListener("mousedown", () => {
    drawBtn.style.backgroundColor = "#97CAEF"; 
    clearGrid();
    // Ask user to set new size
    let size = "";
    
    while (!Number.isInteger(size)) {
        size = parseInt(prompt("Please enter new grid size"));
        if (Number.isInteger(size) && (size >= 100 || size <= 0)) {
            size = alert("Grid size must be between 0 and 100, exclusively");
            size = "";
        }
    }

    // Create new grid
    createGrid(size, size);
})


// Reset grid color to white
resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    rainbow=false;
    cells.forEach((cell) => cell.style.backgroundColor = null);
    drawBtn.style.backgroundColor = "#97CAEF";   
});

// Activates eraser to erase color
eraserBtn = document.querySelector("#eraser");
eraserBtn.addEventListener("click", () => {
    rainbow=false;
    eraser=true;
    drawBtn.style.backgroundColor = "#97CAEF"; 
});

// Default grid size
window.onload = function() {
    createGrid(DEFAULT_SIZE, DEFAULT_SIZE);
};