//Recursive
// const countingChange = (amount, coins, i = 0) => {
//     // Base case
//     if (amount === 0) return 1;

//     let coin = coins[i];

//     let numWays = 0;

//     for (let qty = 0; qty * coin <= amount; qty++){
//         const remainder = amount - (qty * coin);
//         numWays += countingChange(remainder, coins, i + 1);
//     }

//     return numWays;
    
// }

//Optimal/Memoized
const countingChange = (amount, coins, i = 0, memo={}) => {
  // Base case
  if (amount === 0) return 1;
    
  const key = amount + ',' + i;
    
  if (key in memo) return memo[key];

  let coin = coins[i];
  

  let numWays = 0;

  for (let qty = 0; qty * coin <= amount; qty++) {
    const remainder = amount - qty * coin;
    numWays += countingChange(remainder, coins, i + 1, memo);
  }

    memo[key] = numWays;
    return memo[key];
};

console.log(countingChange(4, [1, 2, 3]));