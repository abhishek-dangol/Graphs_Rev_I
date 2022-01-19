const combinationSum4 = (nums, target) => {
    // Base case
    if (target === 0) return 1;
    if (target < 0) return 0;

    let numWays = 0;

    for (let num of nums) {
        const remainder = target - num;
        numWays += combinationSum4(nums, remainder);
    }
    
    return numWays;
}

console.log(combinationSum4([1, 2, 3], 4));