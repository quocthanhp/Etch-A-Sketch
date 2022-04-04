// Create 16x16 grid of square divs
const container = document.getElementById("container");
let eraser = false;

function createGrid(rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", columns);
    for (let i = 0; i < rows * columns; i++) {
        cell = document.createElement("div");
        cell.classList.add('grid-item');
        container.appendChild(cell);
    }
}

createGrid(16, 16);

function getRandomColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r},${b},${g})`;
}

cells = document.querySelectorAll('.grid-item');
cells.forEach((cell) => {
    cell.addEventListener("mouseover", function(e) {
        if (!eraser) {
            e.target.style.backgroundColor = getRandomColor();
        } else {
            e.target.style.backgroundColor = null;
        } 
    });
});     


reset = document.querySelector("#reset");
reset.addEventListener("click", function(e) {
    cells.forEach((cell) => cell.style.backgroundColor = null);   
});

eraserbtn = document.querySelector("#eraser");
eraserbtn.addEventListener("click", () => eraser=true);

