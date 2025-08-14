function paint(square, colour){
    square.style.backgroundColor = colour;
}

function generateGrid(){

    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);

    if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
        alert("Please enter valid numbers for rows and columns.");
        return;
    }

    const newGrid = document.createElement('div');
    newGrid.className = 'grid';

    newGrid.style.gridTemplateColumns = `repeat(${cols}, 50px)`;

    const total = rows * cols;

    for (let i = 0; i < total; i++){
        const square = document.createElement('div');
        square.className = 'square';
        newGrid.appendChild(square);

        square.onclick = () => {
            if (square.style.backgroundColor === 'red') {
                square.style.backgroundColor = 'lightblue';
            } else {
                square.style.backgroundColor = 'red';
            }
        };
    }

    const gridContainer = document.getElementById('grid-container');
    gridContainer.appendChild(newGrid);

}