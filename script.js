// INITIAL STATE
const state = {};


const resetState = () => {
    state.board = [ 
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    state.players = ['', ''];
    state.currentPlayerIndx = 0;
}

//HELPER FUNCTIONS - Small functions that do basic things
const changeTurn = () => {
    state.currentPlayerIndx = state.currentPlayerIndx === 0 ? 1 : 0;
} 

const getCurrentPlayer = () => state.players[state.currentPlayerIndx];

const render = () => {
    renderPlayer();
    renderBoard();
}



// DOM Selectors
const boardElem = document.getElementById('board');
const playerTurnElem = document.getElementById('player-turn');

// DOM Manipulators
const renderBoard = () => {
    boardElem.innerHTML = ''
    let flattenedBoard = state.board.flat(state.board.length);

    for(let i = 0; i < flattenedBoard.length; i++) { 
        const square = flattenedBoard[i];
        const cellElem = document.createElement('div');
        cellElem.classList.add('cell');
        cellElem.innerHTML = square;
        cellElem.dataset.index = i;
        boardElem.appendChild(cellElem);
    
  }    
}

const renderPlayer = () => {
    let text;
    if(!state.players[0] || !state.players[1]) {
        text = `
        <input name="player1" placeholder="Enter player 1's name">
        <input name="player2" placeholder="Enter player 2's name">
        <button class="start">Start</button>
        `
    } else {   
        text = `It's currently ${getCurrentPlayer()}'s turn`
    }
        playerTurnElem.innerHTML = text;

}

// EVENT LISTENERS
boardElem.addEventListener('click', (event) => {
    if(event.target.className !== 'cell') return;

    let cellIndex = event.target.dataset.index
    // state.board[cellIndex] = ;

    changeTurn();
    render();
})

playerTurnElem.addEventListener('click', (event) => {
    if(event.target.className !== 'start') return;
 
    // console.log('I am Her');
    const player1Input = document.getElementsByName('player1')[0];
    state.players[0] = player1Input.value;

    const player2Input = document.getElementsByName('player2')[0];
    state.players[1] = player2Input.value;
    
    console.log(state.players);
    render();
}) 



// BOOSTRAP FUNCTIONS
resetState();
render();



// General layout => Have 2 players competing to get 3 characters in a row: horizontally, vertically or diagonally
// Characters represented by two symbols: X and O. Players take turns putting their specific symbol in empty square
// First player to get 3 symbols in a row wins; if that becomes impossible, the game is done and board resets