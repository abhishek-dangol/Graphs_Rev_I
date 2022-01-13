const connectedComponentsCount = (graph) => {
    let count = 0;
    const visited = new Set();

    for (let node in graph) {
        if (explore(graph, node, visited) === true) {
            count += 1;
        }
    }

    console.log(count);
    return count;
}


const explore = (graph, curr, visited) => {
    if (visited.has(String(curr))) return false;
    visited.add(String(curr));

    for (let neighbor of graph[curr]) {
        explore(graph, neighbor, visited);
    }

    return true;
}

connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
});