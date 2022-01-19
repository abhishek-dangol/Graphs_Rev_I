const overlapSubsequence = (str1, str2, i=0, j=0, memo={}) => {
    // Base case
    if (i === str1.length || j === str2.length) return 0;

    const key = i + ',' + j;

    if (str1[i] === str2[j]) {
        memo[key] = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo);
    } else {
        memo[key] = Math.max(overlapSubsequence(str1, str2, i + 1, j, memo),
            overlapSubsequence(str1, str2, i, j + 1, memo));
    }
    return memo[key];
}

console.log(overlapSubsequence("cat", "aot"));