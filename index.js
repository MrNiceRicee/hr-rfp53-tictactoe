
// create new board


let currentBoard;
let boardSize = 3;

const createBoard = () => {
  currentBoard = new Board(boardSize);

  let app = document.querySelector('#app');
  let board = document.createElement('div');
  board.classList.add('game-container')
  app.append(board);
  for(let x = 0; x < boardSize; x++) {
    for(let y = 0; y < boardSize; y++) {
      let button = document.createElement('button');
      button.classList.add('btn', 'btn-outline', 'cell')
      button.id = x + ',' + y;
      button.innerText = '';
      board.append(button);
    }
  }

  const cellBtn = document.querySelector('.game-container');
  cellBtn.addEventListener('click', (event) => {
    let btnId = event.target.id.split(',');
    if (btnId.length === 2) {
      console.log(currentBoard.setCellVisit(btnId[0],btnId[1]));
      event.target.innerText = currentBoard.getCell(btnId[0],btnId[1]).getCellTurn();
    }
  })
}



createBoard();



// win conditions

// lose conditions

// show win or lose

// restart new