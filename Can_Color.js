const canColor = (graph) => {
    const coloring = {};
    
    for (let node in graph) {
        if (!(node in coloring) && validate(graph, node, coloring, false) === false) {
            return false;
        }
    }

    return true;
}

const validate = (graph, node, coloring, currColor) => {
    if (node in coloring) return coloring[node] === currColor;

    coloring[node] = currColor;

    for (let neighbor of graph[node]) {
        if (validate(graph, node, coloring, !currColor) === false) {
            return false;
        }
    }

    return true;
}