const documentContainer = document.querySelector("#document-container");
const grid = document.createElement("div");
grid.setAttribute("id", "grid-container");
const gridSquare = document.createElement("div");
const buttons = document.querySelector("#buttons");
const createGrid16 = document.createElement("button");
const createGrid32 = document.createElement("button");
const createGrid64 = document.createElement("button");
const gridOutlineToggle = document.createElement("button");

createGrid16.innerText = "16x16";
createGrid16.classList.add("grid-16x16");
createGrid32.innerText = "32x32";
createGrid32.classList.add("grid-32x32");
createGrid64.innerText = "64x64";
createGrid64.classList.add("grid-64x64");
gridOutlineToggle.innerText = "No grid outline";
gridOutlineToggle.classList.add("grid-outline-toggle");

buttons.appendChild(createGrid16);
buttons.appendChild(createGrid32);
buttons.appendChild(createGrid64);
buttons.appendChild(gridOutlineToggle);
documentContainer.appendChild(grid);

function generateStandardGrid() {
  for (let i = 16 * 16; i > 0; i--) {
    const amountOfGridSquares = 16;
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute("class", "grid-square");
    gridSquare.style.width = `${560 / amountOfGridSquares}px`;
    gridSquare.style.height = `${560 / amountOfGridSquares}px`;
    grid.appendChild(gridSquare);

    gridSquare.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "#000000";
    });

    gridSquare.addEventListener("click", (event) => {
      event.target.style.backgroundColor = "#000000";
    });

    gridOutlineToggle.addEventListener("click", () => {
      gridSquare.style.outline = "0px";
    });
  }
}

createGrid16.addEventListener("click", function (e) {
  grid.innerHTML = "";
  for (let i = 16 * 16; i > 0; i--) {
    const grid = document.querySelector("#grid-container");
    const amountOfGridSquares = 16;
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute("class", "grid-square");
    gridSquare.style.width = `${560 / amountOfGridSquares}px`;
    gridSquare.style.height = `${560 / amountOfGridSquares}px`;
    grid.appendChild(gridSquare);

    gridSquare.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "#000000";
    });

    gridSquare.addEventListener("click", (event) => {
      event.target.style.backgroundColor = "#000000";
    });

    gridOutlineToggle.addEventListener("click", () => {
      gridSquare.style.outline = "0px";
    });
  }
});

createGrid32.addEventListener("click", function (e) {
  grid.innerHTML = "";
  for (let i = 32 * 32; i > 0; i--) {
    const grid = document.querySelector("#grid-container");
    const amountOfGridSquares = 32;
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute("class", "grid-square");
    gridSquare.style.width = `${560 / amountOfGridSquares}px`;
    gridSquare.style.height = `${560 / amountOfGridSquares}px`;
    grid.appendChild(gridSquare);

    gridSquare.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "#000000";
    });

    gridSquare.addEventListener("click", (event) => {
      event.target.style.backgroundColor = "#000000";
    });

    gridOutlineToggle.addEventListener("click", () => {
      gridSquare.style.outline = "0px";
    });
  }
});

createGrid64.addEventListener("click", function (e) {
  grid.innerHTML = "";
  for (let i = 64 * 64; i > 0; i--) {
    const grid = document.querySelector("#grid-container");
    const amountOfGridSquares = 64;
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute("class", "grid-square");
    gridSquare.style.width = `${560 / amountOfGridSquares}px`;
    gridSquare.style.height = `${560 / amountOfGridSquares}px`;
    gridSquare.style.outline = "0.5px solid black";
    grid.appendChild(gridSquare);

    gridSquare.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "#000000";
    });

    gridSquare.addEventListener("click", (event) => {
      event.target.style.backgroundColor = "#000000";
    });

    gridOutlineToggle.addEventListener("click", () => {
      gridSquare.style.outline = "0px";
    });
  }
});

generateStandardGrid();
