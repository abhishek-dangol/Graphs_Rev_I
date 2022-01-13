// Time: O(e) where e is the number of edges
// Space: O(n) where n is the number of nodes
// Recursive


const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]){
    if (hasPath(graph, neighbor, dst) === true){
      return true;
    }
  }

  return false;
};


