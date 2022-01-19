const canSum = (target, nums) => {
    // Base case
    if (target === 0) return true;
    if (target < 0) return false;

    for (let num of nums) {
        const remainder = target - num;
        if (canSum(remainder, nums) === true) {
            return true;
        }
    }
    return false;
}

console.log(canSum(13, [5, 3, 4, 7]));