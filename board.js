class Board {
  constructor(size, turn = 'x') {
    this.size = size;
    this.board = [];
    this.turn = turn;
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
    let xchecker = 0;
    let ychecker, xychecker, dxychecker = xychecker = ychecker = xchecker;

    for(let bi = 0, bd = 2; bi < this.size && bd > -1; bi++, bd--) {
      // check horizontal
      if (this.getCellVisited(x, bi) && this.getCell(x,bi).getCellTurn() === this.getBoardTurn()) {
        xchecker++;
        if (xchecker === 3) {
          // return 'horizontal';
          return 'won';
        }
      }
      // check vertical
      if (this.getCellVisited(bi, y)  && this.getCell(bi,y).getCellTurn() === this.getBoardTurn()) {
        ychecker++;
        if (ychecker === 3) {
          // return 'vertical';
          return 'won';
        }
      }
      // check diagonal
      if (this.getCellVisited(bi, bi)  && this.getCell(bi,bi).getCellTurn() === this.getBoardTurn()) {
        xychecker++;
        if (xychecker === 3) {
          // return 'l-r';
          return 'won';
        }
      }
      if (this.getCellVisited(bi, bd)  && this.getCell(bi,bd).getCellTurn() === this.getBoardTurn()) {
        dxychecker++;
        if (dxychecker === 3) {
          // return 'r-l';
          return 'won';
        }
      }
    }

    let counter = 0;
    for (let xx = 0; xx < this.size; xx++) {
      for (let yy = 0; yy < this.size; yy++) {
        if (this.getCell(xx,yy).isVisited()) {
          counter++;
          if (counter === 9) {
            return 'tie';
          }
        }
      }
    }
    this.turn === 'x' ? this.turn = 'o' : this.turn = 'x';
    return false;

  }

  getBoardTurn() {
    return this.turn;
  }

  setCellVisit(x, y) {
    if (!this.board[x][y].isVisited()) {
      this.board[x][y].visitCell(this.turn);
    }
    return this.checkBoard(x, y);
  }

  getCellVisited(x,y) {
    return this.getCell(x,y).isVisited();
  }

  getCell(x, y) {
    return this.board[x][y];
  }




}