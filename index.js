
// create new board


let currentBoard;
let boardSize = 3;
let players = {
  x: { name: null, score: 0 },
  o: { name: null, score: 0 },
  lastwinner: {
    x: false,
    o: true
  };
};


const createBoard = () => {
  currentBoard = new Board(boardSize);

  let app = document.querySelector('#app');
  app.innerHTML = '';
  let board = document.createElement('div');
  board.classList.add('game-container')
  app.append(board);
  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
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
      if (!currentBoard.setCellVisit(btnId[0], btnId[1])) {
        let turn = currentBoard.getCell(btnId[0], btnId[1]).getCellTurn();
        if (turn === 'x' && players[turn].name) {
          event.target.innerText = players[turn].name;
        } else if (turn === 'o' && players[turn].name) {
          event.target.innerText = players[turn].name;
        } else {
          event.target.innerText = currentBoard.getCell(btnId[0], btnId[1]).getCellTurn();
        }
      } else if ((currentBoard.setCellVisit(btnId[0], btnId[1]) === 'won')) {
        event.target.innerText = currentBoard.getCell(btnId[0], btnId[1]).getCellTurn();
        players[currentBoard.getCell(btnId[0], btnId[1]).getCellTurn()].score++;
        console.log(players);
        setTimeout(() => {
          let reply = confirm('Game done! ' + currentBoard.getCell(btnId[0], btnId[1]).getCellTurn().toUpperCase() + ' won! Play again?');
          if (reply) {
            createBoard();
          }
        }, 50)
      } else if ((currentBoard.setCellVisit(btnId[0], btnId[1]) === 'tie')) {
        event.target.innerText = currentBoard.getCell(btnId[0], btnId[1]).getCellTurn();
        setTimeout(() => {
          let reply = confirm('Game tied! Play again?');
          if (reply) {
            createBoard();
          }
        }, 50)
      }
    }
  })
}



const customDialog = (message, yesCB, noCB) => {

}

const changeNames = (name, revert = false) => {
  let associatedIds = [];
  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      if (currentBoard.board[x][y].getCellTurn() === name) {
        associatedIds.push({ x: x, y: y });
      }
    }
  }
  for (let i = 0; i < associatedIds.length; i++) {
    let targetCell = document.getElementById(`${associatedIds[i].x},${associatedIds[i].y}`);
    if (!revert) {
      targetCell.innerText = players[name].name;
    } else {
      targetCell.innerText = name;
    }
  }
}

document.querySelector('#playerNames').addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && event.target.value) {
    console.log(event.target.id)
    if (event.target.id === 'player1') {
      players.x.name = event.target.value;
      changeNames('x');
    } else if (event.target.id === 'player2') {
      players.o.name = event.target.value;
      changeNames('o');
    }
  } else if (event.key === 'Enter' && !event.target.value) {
    if (event.target.id === 'player1') {
      changeNames('x', true);
    } else if (event.target.id === 'player2') {
      changeNames('o', true);
    }
  }
})

document.querySelector('#newgame').addEventListener('click', (event) => {
  let reply = confirm('Start new game?');
  if (reply) {
    createBoard();
  }
});

createBoard();



// win conditions

// lose conditions

// show win or lose

// restart new