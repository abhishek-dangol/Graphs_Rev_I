const semestersRequired = (numCourses, prereqs) => {
    const graph = buildGraph(numCourses, prereqs);

    const distance = {};

    for (let node in graph) {
        if (graph[node].length === 0) {
            distance[node] === 1;
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
        const neighborDistance = traverseDistance(graph, neighbor, distance);
        maxDistance = Math.max(maxDistance, neighborDistance);
    }

    distance[node] = 1 + maxDistance;
    return distance[node];
}

const buildGraph = (numCourses, prereqs) => {
    const graph = {};

    for (let i = 0; i < numCourses; i++){
        graph[i] = [];
    }

    for (let prereq of prereqs) {
        const [a, b] = prereq;
        graph[a].push(b);
    }

    return graph;

}