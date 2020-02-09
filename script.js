const board = document.querySelector('#board');

function colorChange(div) {
    div.style.backgroundColor = 'red';
}

function createBoard() {
    
    // variables for size of cell and container maybe?
    let cellWidth = 50 
    let cellHeight = 50
    let gridContainerSize = 16;
    
    for (let i = 0; i < gridContainerSize; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        // add these styles to css instead?
        div.style.width = `${cellWidth}px`;
        div.style.height = `${cellHeight}px`;
        div.style.border = '1px solid black';
        div.addEventListener('mouseover', (() => colorChange(div)));
        board.appendChild(div);
    }
}

createBoard();