const minChange = (amount, coins) => {
    // Base cases
    if (amount === 0) return 0;
    if (amount < 0) return Infinity;

    let minCoins = Infinity;

    for (let coin of coins) {
        const remainder = amount - coin;
        let currMin = 1 + minChange(remainder, coins);
        minCoins = Math.min(currMin, minCoins);
    }

    return minCoins;
}


console.log(minChange(8, [1, 5, 4, 12]));