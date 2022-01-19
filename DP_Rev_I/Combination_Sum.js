const combinationSum = (target, nums) => {
    if (target === 0) return [[]];
    if (target < 0) return null;
    const result = [];

    for (let num of nums) {
        const remainder = target - num;
        const remainderResult = combinationSum(remainder, nums);
        if (remainderResult !== null) {
            const targetResult = remainderResult.map(way => [num, ...way])
            result.push(...targetResult);
        }
    }
    return result;
}

console.log(combinationSum(8, [2, 3, 5]));