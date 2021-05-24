class Cell {
  constructor() {
    this.visited =  false;
    this.turn = '';
  }


  isVisited() {
    return this.visited;
  }

  getCellTurn() {
    return this.turn;
  }

  visitCell(byTurn) {
    this.visited = true;
    this.turn = byTurn;
  }
}

// module.exports = Cell;
// exports default Cell;