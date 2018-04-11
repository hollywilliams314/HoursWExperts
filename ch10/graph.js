// To export roadGraph, you add a property to the exports object. Because
// buildGraph takes a data structure that doesn’t precisely match roads, the
// splitting of the road strings must happen in your module.


function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

module.exports = buildGraph;
