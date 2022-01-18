const nonAdjacentSum = (nums, i=0, memo={}) => {
    //Base case
    if (i >= nums.length) return 0;

    if (i in memo) return memo[i];

    const include = nums[i] + nonAdjacentSum(nums, i + 2, memo);
    const exclude = nonAdjacentSum(nums, i + 1, memo);

    memo[i] = Math.max(include, exclude);

    return memo[i];
}

const nums = [2, 4, 5, 12, 7];
console.log(nonAdjacentSum(nums)); 