
const decodeWays = (s, i = 0, memo = {}) => {
    // Base cases
    if (i === s.length) return 1;
    if (s[i] === '0') return 0;
    if (i === s.length - 1) return 1;

    if (i in memo) return memo[i];

    let count = decodeWays(s, i + 1, memo);
    if (Number(s.substring(i, i + 2)) <= 26) {
        count += decodeWays(s, i + 2, memo);
    }

    memo[i] = count;
    return memo[i];
    
}

console.log(decodeWays('0'));