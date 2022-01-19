const howSum = (target, nums) => {
    // Base cases
    if (target === 0) return [];
    if (target < 0) return null;

    for (let num of nums) {
        const remainder = target - num;
        const remainderResult = howSum(remainder, nums);
        if (remainderResult !== null) {
            return [...remainderResult, num];
        }
    }

    return null;
}

console.log(howSum(7, [5, 3, 4, 7]));