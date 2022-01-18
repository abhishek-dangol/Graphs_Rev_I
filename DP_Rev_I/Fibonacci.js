const fib = (n, memo={}) => {
    // Base cases
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    if (n in memo) return memo[n];

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    return memo[n];
}


console.log(fib(100));