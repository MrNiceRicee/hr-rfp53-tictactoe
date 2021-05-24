class Cell {
  constructor() {
    this.visited =  false;
  }

  isVisited() {
    return this.visited;
  }

  visitCell() {
    this.visited = true;
  }
}

// module.exports = Cell;
// exports default Cell;