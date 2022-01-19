const quickestConcat = (str, words) => {
    const answer = _quickestConcat(str, words);
    if (answer === Infinity) {
        return -1;
    } else {
        return answer;
    }
}

const _quickestConcat = (str, words, memo={}) => {
    // Base case
    if (str.length === 0) return 0;

    if (str in memo) return memo[str];

    let minLength = Infinity;

    for (let word of words) {
        if (str.startsWith(word)) {
            const suffix = str.slice(word.length);
            let currMin = 1 + _quickestConcat(suffix, words, memo);
            minLength = Math.min(minLength, currMin);
        }
    }
    memo[str] = minLength;
    return memo[str];
}

console.log(quickestConcat("caution", ["ca", "ion", "caut", "ut"]));
console.log(quickestConcat("respondorreact", ["re", "or", "spond", "act", "respond"]));