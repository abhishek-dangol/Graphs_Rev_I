const longestPath = (graph) => {
    const distance = {};

    for (node in graph) {
        if (graph[node].length === 0) {
            distance[node] = 0;
        }
    }

    for (let node in graph) {
        traverseDistance(graph, node, distance);
    }
    return Math.max(...Object.values(distance));
}

const traverseDistance = (graph, node, distance) => {
    if (node in distance) return distance[node];

    let maxDistance = 0;
    for (let neighbor of graph[node]) {
        const currDistance = traverseDistance(graph, neighbor, distance);
        maxDistance = Math.max(maxDistance);
    }

    distance[node] = 1 + maxDistance;
    return distance[node];
    console.log(distance);
}

const graph = {
  a: ["b"],
  b: [],
  c: ["e"],
  d: ["c", "e"],
  e: [],
  f: ["g"],
  g: ["c"],
};

longestPath(graph);