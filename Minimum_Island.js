const minimumIsland = (grid) => {
    let minSize = Infinity;

    for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid[0].length; col++){
            if (grid[row][col] === 'L') {
                const size = exploreSize(grid, row, col);
                minSize = Math.min(minSize, size);
            }
        }
    }

    return minSize;
}

const exploreSize = (grid, row, col) => {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 'W') return 0;

    grid[row][col] = 'W';

    let size = 1;

    size += exploreSize(grid, row + 1, col);
    size += exploreSize(grid, row - 1, col);
    size += exploreSize(grid, row, col - 1);
    size += exploreSize(grid, row, col + 1);

    return size;
}



const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid));