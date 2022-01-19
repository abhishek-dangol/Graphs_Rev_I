const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo={}) => {
    // Base case
    if (i === j) return 1;
    if (i > j) return 0;

    const key = i + ',' + j;

    if (key in memo) return memo[key];

    if (str[i] === str[j]) {
        memo[key] = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);
    } else {
        memo[key] = Math.max(maxPalinSubsequence(str, i + 1, j), maxPalinSubsequence(str, i, j - 1));
    }

    return memo[key];
}


console.log(maxPalinSubsequence("luwxult"));