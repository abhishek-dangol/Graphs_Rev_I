const breakingBoundaries = (m, n, k, r, c, memo={}) => {
    //Base case
    if (r < 0 || c < 0 || r >= m || c >= n) return 1;
    if (k === 0) return 0;

    const key = k + ',' + r + ',' + c;
    if (key in memo) return memo[key];

    let numWays = 0;

    numWays += breakingBoundaries(m, n, k - 1, r + 1, c, memo);
    numWays += breakingBoundaries(m, n, k - 1, r - 1, c, memo);
    numWays += breakingBoundaries(m, n, k - 1, r, c + 1, memo);
    numWays += breakingBoundaries(m, n, k - 1, r, c - 1, memo);

    memo[key] = numWays;
    return memo[key];
}

console.log(breakingBoundaries(6, 6, 15, 3, 4));