const grid = document.querySelector("#grid-container");
const maxGridSquares = prompt('How much squares do you want? (1x1 - 60x60 only)')

for (let i = maxGridSquares * maxGridSquares; i != 0; i--) {
  const gridSquare = document.createElement("div");
  gridSquare.setAttribute("class", "grid-square");
  grid.appendChild(gridSquare);

  grid.addEventListener('hover', function(event) {
    gridSquare.style.backgroundColor = 'green';
  });
}
