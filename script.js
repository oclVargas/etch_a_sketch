const board = document.querySelector('#board');
const resetBoard = document.querySelector('.btn-reset');

function colorChange(div) {
    div.style.backgroundColor = 'red';
}

function boardReset() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '#FFF'
    })
}



function createBoard() {
    
    // variables for size of cell and container maybe?
    let cellWidth = 100 
    let cellHeight = 100
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

resetBoard.addEventListener('click', boardReset);
createBoard();