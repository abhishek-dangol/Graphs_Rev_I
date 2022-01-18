const summingSquares = (n, memo={}) => {
    // Base case
    if (n === 0) return 0;

    if (n in memo) return memo[n];

    let minSquares = Infinity;

    for (let i = 1; i <= Math.sqrt(n); i++){
        const square = i * i;
        const currMin = 1 + summingSquares(n - square, memo);
        minSquares = Math.min(currMin, minSquares);
    }

    memo[n] = minSquares;

    return memo[n];
}

console.log(summingSquares(12));