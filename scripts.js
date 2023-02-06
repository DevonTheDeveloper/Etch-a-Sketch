const grid = document.querySelector("#grid-container");
const amountOfGridSquares = prompt(`How much squares do you want (0x0 ratio)`);

for (let i = amountOfGridSquares * amountOfGridSquares; i > 0; i--) {
  const gridSquare = document.createElement("div");
  gridSquare.setAttribute("class", "grid-square");
  gridSquare.style.width = `${960 / amountOfGridSquares}px`;
  gridSquare.style.height = `${960 / amountOfGridSquares}px`;
  grid.appendChild(gridSquare);
}
