const maxIncreasingSubseq = (nums) => {
    let dp = Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++){
        for (let j = 0; j < i; j++){
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }

    let maxLen = 0;

    for (let i = 0; i < dp.length; i++){
        maxLen = Math.max(maxLen, dp[i]);
    }

    return maxLen;
}

console.log(maxIncreasingSubseq([4, 18, 20, 10, 12, 15, 19]));