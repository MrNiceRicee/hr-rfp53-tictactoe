class Cell {
  constructor() {
    visited: false;
  }

  isVisited() {
    return this.visited;
  }

  visitCell() {
    visited = true;
  }
}

// module.exports = Cell;
// exports default Cell;