// clean up some of the code
// add validation to prompt
// change color of marker


const board = document.querySelector('#board');
const resetBoard = document.querySelector('.btn-reset');
const resizeBoard = document.querySelector('.btn-resize');
// variables for size of cell and container maybe?
let gridContainerSize = 16;

function colorChange(div) {
    div.style.backgroundColor = 'red';
}

function boardReset() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '#FFF'
    })
}

function boardResize() {
    const cells = document.querySelectorAll('.cell')
    let newSize = prompt('Please enter a number (the number will determine the size of the grid')
    cells.forEach(cell => {
        board.removeChild(cell);
    })
    let string = "";

    for (let i = 1; i <= (newSize * newSize); i++) {
        if (i <= newSize) {
            string = string + " 1fr";
            
        }

        let node = document.createElement('div');
        node.classList.add('cell');
        node.style.border = '1px solid black';
        node.addEventListener('mouseover', (() => colorChange(node)))
        board.appendChild(node)
    }
    board.style.gridTemplateColumns = string;
    board.style.gridTemplateRows = string;
    // createBoard(newSize)
}

function createBoard(gridContainerSize) {
    for (let i = 0; i < gridContainerSize; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.style.border = '1px solid black';
        div.addEventListener('mouseover', (() => colorChange(div)));

        // board.style.gridTemplateColumns = `repeat(4, ${})`;
        // board.style.gridTemplateRows = `repeat(4, ${})`;
        board.appendChild(div);
    }
}

resizeBoard.addEventListener('click', boardResize);
resetBoard.addEventListener('click', boardReset);
createBoard(gridContainerSize);