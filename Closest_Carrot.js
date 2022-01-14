const closestCarrot = (grid, startRow, startCol) => {

    const visited = new Set([startRow + ',' + startCol]);

    const queue = [[startRow, startCol, 0]];

    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();

        if (grid[row][col] === 'C') return distance;

        const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let delta of deltas) {
            const [rowDelta, colDelta] = delta;
            const neighborRow = row + rowDelta;
            const neighborCol = col + colDelta;
            const pos = neighborRow + ',' + neighborCol;
            if (neighborRow >= 0 && neighborCol >= 0  && neighborRow < grid.length && neighborCol < grid[0].length && grid[neighborRow][neighborCol] !== 'X' && !visited.has(pos)) {
                queue.push([neighborRow, neighborCol, distance + 1]);
                visited.add(pos);
            }
        }
    }

    return -1;

}


const grid = [
  ["O", "O", "O", "O", "O"],
  ["O", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "C", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["C", "O", "O", "O", "O"],
];

console.log(closestCarrot(grid, 0, 0));