const countPaths = (grid, row=0, col=0, memo={}) => {
    // Base cases
    if (row === grid.length - 1 && col === grid[0].length - 1) return 1;
    // If out of bounds
    if (row === grid.length || col == grid[0].length || grid[row][col] === 'X') return 0;

    const key = row + ',' + col;

    if (key in memo) return memo[key];

    const downCount = countPaths(grid, row + 1, col, memo);
    const rightCount = countPaths(grid, row, col + 1, memo);

    memo[key] = downCount + rightCount;

    return memo[key];

}

const grid = [
  ["O", "O", "X"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
console.log(countPaths(grid)); 