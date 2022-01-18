//Recursive
// const sumPossible = (amount, nums) => {
//     // Base case
//     if (amount === 0) return true;
//     if (amount < 0) return false;

//     for (let num of nums) {
//         const remainder = amount - num;
//         if (sumPossible(remainder, nums) === true) {
//             return true;
//         }
//     }

//     return false;
// }

//Optimal uisng memoization
const sumPossible = (amount, nums, memo={}) => {
  // Base case
  if (amount === 0) return true;
  if (amount < 0) return false;
    
  if (amount in memo) return memo[amount];

  for (let num of nums) {
    const remainder = amount - num;
    if (sumPossible(remainder, nums, memo) === true) {
        memo[amount] = true;
        return memo[amount];
    }
  }

    memo[amount] = false;
    return memo[amount];
};

console.log(sumPossible(5, [1, 2, 3]));
console.log(sumPossible(15, [6, 2, 10, 19]));
console.log(sumPossible(12, []));