class Board {
  constructor(size) {
    this.size = size;
    this.board = [];
    for(var x = 0; x < size; x++) {
      this.board.push([]);
      for(var y = 0; y < size; y++) {
        this.board[x][y] = new Cell();
      }
    }
  }

  // do win condition

  checkBoundary(x, y) {
    return (0 <= x && x < this.size &&
      0 <= x && x< this.size)
  }

  checkBoard(x ,y) {
    // gosh, this implementation is lowkey kinda trash
    // check board based on last known condition change
    // we can assume everything was still fine up until this moment
    let checker = 0;

    // check horizontal
    for(let boardy = 0; boardy < this.size; boardy++) {
      if (this.getCellVisited(x,boardy)) {
        checker++;
        if (checker === 3) {
          console.log('horizontal conflict');
        }
      }
    }
    checker = 0;
    for(let boardx = 0; boardx < this.size; boardx++) {
      if (this.getCellVisited(boardx,y)) {
        checker++;
        if (checker === 3) {
          console.log('vertical conflict');
        }
      }
    }
    checker = 0;
    for(let xy = 0; xy < this.size; xy++) {
      if (this.getCellVisited(xy,xy)) {
        checker++;
        if (checker === 3) {
          console.log('leftrightdiagonal conflict');
        }
      }
    }
    checker = 0;
    for(var bx = 0, by = 2; bx < this.size && by > -1; bx++, by--) {
      if (this.getCellVisited(bx,by)) {
        checker++;
        if (checker === 3) {
          console.log('leftrightdiagonal conflict');
        }
      }
    }
    // check vertical
    // check diagonal
  }

  setCellVisit(x, y) {
    this.board[x][y].visited = true;
    this.checkBoard(x, y);
  }

  getCellVisited(x,y) {
    return this.getCell(x,y).isVisited();
  }

  getCell(x, y) {
    return this.board[x][y];
  }




}