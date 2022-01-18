const maxPathSum = (grid, row=0, col=0, memo={}) => {
    //Base case
    if (row === grid.length - 1 && col === grid[0].length - 1) return grid[row][col];
    //If out of bounds
    if (row === grid.length || col === grid[0].length) return 0;

    const key = row + ',' + col;

    if (key in memo) return memo[key];

    const downPath = maxPathSum(grid, row + 1, col, memo);
    const rightPath = maxPathSum(grid, row, col + 1, memo);

    memo[key] = grid[row][col] + Math.max(downPath, rightPath);

    return memo[key];
}

const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];

console.log(maxPathSum(grid));