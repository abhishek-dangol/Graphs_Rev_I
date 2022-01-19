const climbStairs = (n, i=0, memo={}) => {
    //Base case
    if (i === n) return 1;
    if (i > n) return 0;

    if (i in memo) return memo[i];

    memo[i] = climbStairs(n, i + 1, memo) + climbStairs(n, i + 2, memo);

    return memo[i];
}


console.log(climbStairs(62));