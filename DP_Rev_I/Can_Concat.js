const canConcat = (str, words, memo={}) => {
    // Base case
    if (str.length === 0) return true;

    if (str in memo) return memo[str];

    for (let word of words) {
        if (str.startsWith(word) === true) {
            const suffix = str.slice(word.length);
            if (canConcat(suffix, words, memo) === true) {
                memo[str] = true;
                return memo[str];
            }
        }
    }
    memo[str] = false;
    return memo[str];
}

console.log(canConcat("foodisgood", ["is", "g", "ood", "f"])); 