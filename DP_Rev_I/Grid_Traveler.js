// Recursive approach
// const gridTraveler = (m, n) => {
//     if (m === 1 && n === 1) return 1;
//     if (m === 0 || n === 0) return 0;

//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// }

// Optimal approach using memoization
const gridTraveler = (m, n, memo = {}) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
    
  const key = m + ',' + n;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    
    return memo[key];
};


console.log(gridTraveler(3, 7))