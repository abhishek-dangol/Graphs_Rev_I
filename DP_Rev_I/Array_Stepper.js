const arrayStepper = (nums, i=0, memo={}) => {
     // Base case
    
    if (i >= nums.length - 1) return true;

    if (i in memo) return memo[i];

    const maxStep = nums[i];

    for (let step = 1; step <= maxStep; step++){
        if (arrayStepper(nums, i + step, memo) === true) {
            memo[i] = true;
            return true;
        }
    }
    memo[i] = false;
    return memo[i];

}

console.log(arrayStepper([2, 4, 2, 0, 0, 1]));
console.log(arrayStepper([2, 3, 2, 0, 0, 1]));