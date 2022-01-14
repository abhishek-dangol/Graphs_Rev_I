const islandCount = (grid) => {
    let numOfIslands = 0;

    for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid[0].length; col++){
            if (grid[row][col] === 'L') {
                numOfIslands++;
                explore(grid, row, col);
            }
        }
    }
    
    return numOfIslands;
}

const explore = (grid, row, col) => {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 'W') return;

    grid[row][col] = 'W';

    explore(grid, row - 1, col);
    explore(grid, row + 1, col);
    explore(grid, row, col - 1);
    explore(grid, row, col + 1);
}


const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid));