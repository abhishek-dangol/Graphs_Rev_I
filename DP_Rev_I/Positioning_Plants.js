const positioningPlants = (costs, pos=0, lastPlant=null, memo={}) => {
    // Base case
    if (pos === costs.length) return 0;

    const key = pos + ',' + lastPlant;

    if (key in memo) return memo[key];

    let minCost = Infinity

    for (let plant = 0; plant < costs[pos].length; plant++){
        if (plant !== lastPlant) {
             let currMin = costs[pos][plant] + positioningPlants(costs, pos + 1, plant, memo);
             minCost = Math.min(minCost, currMin);
        }
       
    }

    memo[key] = minCost;
    return memo[key];
}