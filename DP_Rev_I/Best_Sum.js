const bestSum = (target, nums) => {
    // Base case
    if (target === 0) return [];
    if (target < 0) return null;

    let shortestCombination = null;

    for (let num of nums) {
        const remainder = target - num;
        const remainderResult = bestSum(remainder, nums);
        if (remainderResult !== null) {
            const combination = [...remainderResult, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
}

console.log(bestSum(8, [2, 3, 5]));