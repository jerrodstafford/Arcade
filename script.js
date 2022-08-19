// State of board (changes)
const state = {};


const resetState = () => {
    state.board = ['','','','','','','','',''];
}

// DOM Selectors
const boardElem = document.getElementById('board');

// DOM Manipulators
const renderBoard = () => {
    boardElem.innerHTML = ''

    for(let i = 0; i < state.board.length; i++) {
        const input = state.board[i];
        const cellElem = document.createElement('div');
        cellElem.classList.add('cell');
        const symbolElem = document.createElement('span');
        symbolElem.classList.add('symbol');
        symbolElem.innerHTML = input;
        cellElem.dataset.index = i;
        cellElem.appendChild(symbolElem);
        boardElem.appendChild(cellElem);
    }
    
}

// EVENT LISTENERS
boardElem.addEventListener('click', (event) => {
    if(event.target.className !== 'cell') return;

    let cellIndex = event.target.dataset.index
    state.board[cellIndex] = '';

    renderBoard();
})

// BOOSTRAP FUNCTIONS
resetState();
renderBoard();



// General layout => Have 2 players competing to get 3 characters in a row: horizontally, vertically or diagonally
// Characters represented by two symbols: X and O. Players take turns putting their specific symbol in empty square
// First player to get 3 symbols in a row wins; if that becomes impossible, the game is done and board resets