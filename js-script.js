const grid = document.getElementById("grid");
let eraser = false;
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

function clearGrid() {
   grid.innerHTML = '';
}

createGrid(DEFAULT_SIZE, DEFAULT_SIZE);

function getRandomColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r},${b},${g})`;
}
// Draw
drawBtn = document.querySelector("#draw");
drawBtn.addEventListener("click", () => {
    hover();
});


// Hover handling
function hover() {
    cells = document.querySelectorAll('.grid-item');
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", function(e) {
            if (!eraser) {
                e.target.style.backgroundColor = getRandomColor();
            } else {
                e.target.style.backgroundColor = null;
            } 
            return;
        });
    });
}     

// Clear grid 
clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    clearGrid();
    // Ask user to set new size
    let size = parseInt(prompt("Please enter new grid size"));

    // Create new grid
    if (!Number.isInteger(size)) return;

    // Clear grid and create new
    createGrid(size, size);
})


// Reset grid color
resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    cells.forEach((cell) => cell.style.backgroundColor = null);   
});

// Activates eraser to erase color
eraserBtn = document.querySelector("#eraser");
eraserBtn.addEventListener("click", () => eraser=true);


