const topologicalOrder = (graph) => {
    const numParents = {};

    for (let node in graph) {
        numParents[node] = 0;
    }

    for (let node in graph) {
        for (let child of graph[node]) {
            numParents[child] += 1;
        }
    }

    console.log(numParents);

    const ready = [];
    for (let node in numParents) {
        if (numParents[node] === 0) ready.push(node);
    }

    console.log(ready);

    const order = [];

    while (ready.length > 0) {
        const node = ready.pop();
        order.push(node);
        for (let child of graph[node]) {
            numParents[child] -= 1;
            if (numParents[child] === 0) ready.push(child);
        }
    }



    return order;


}


topologicalOrder({
  a: ["f", "d"],
  b: ["a"],
  c: ["a"],
  d: [],
  e: ["b", "c"],
  f: ["d"],
});