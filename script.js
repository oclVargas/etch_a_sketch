// clean up some of the code
const board = document.querySelector('#board');
const resetBoard = document.querySelector('.btn-reset');
const resizeBoard = document.querySelector('.btn-resize');
// variables for size of cell and container maybe?
let gridContainerSize = 16;
let num = 0.1;

function colorChange(div) {
    let colors = ["rgb(255, 255, 255)", "rgb(230, 230, 230)", "rgb(204, 204, 204)", "rgb(179, 179, 179)", "rgb(153, 153, 153)", "rgb(128, 128, 128)", "rgb(102, 102, 102)", "rgb(77, 77, 77)", "rgb(51, 51, 51)", "rgb(26, 26, 26)", "rgb(0, 0, 0)"]
    let element = getComputedStyle(div);
    let col = element.backgroundColor;
    console.log(col)
    for (let i = 0; i < 10; i++) {
        if (colors[i] == col) {
            div.style.backgroundColor = colors[i + 1];
            break;
        }
    }
}

function boardReset() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '#FFF'
    })
}

function boardResize() {
    const cells = document.querySelectorAll('.cell')
    let newSize = prompt('Please enter a number between 1 and 100 (the number will determine the size of the grid')
    cells.forEach(cell => {
        board.removeChild(cell);
    })

    if (newSize > 100 || newSize < 1) {
        newSize = 4;
    }
    let string = "";

    for (let i = 1; i <= (newSize * newSize); i++) {
        if (i <= newSize) {
            string = string + " 1fr";
            
        }
        let node = document.createElement('div');
        node.classList.add('cell');
        node.style.border = '1px solid black';
        node.style.backgroundColor = 'rgb(255, 255, 255)';
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
        div.style.backgroundColor = 'rgb(255, 255, 255)';
        div.addEventListener('mouseover', (() => colorChange(div)));

        // board.style.gridTemplateColumns = `repeat(4, ${})`;
        // board.style.gridTemplateRows = `repeat(4, ${})`;
        board.appendChild(div);
    }
}

resizeBoard.addEventListener('click', boardResize);
resetBoard.addEventListener('click', boardReset);
createBoard(gridContainerSize);