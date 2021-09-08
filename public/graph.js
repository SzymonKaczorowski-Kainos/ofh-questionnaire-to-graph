var g = new dagreD3.graphlib.json.read(JSON.parse(graphString));

g.nodes().forEach(function(v) {
  var node = g.node(v);
  // Round the corners of the nodes
  node.rx = node.ry = 5;
});

// Create the renderer
var render = new dagreD3.render();

// Set up an SVG group so that we can translate the final graph.
var svg = d3.select("svg"), svgGroup = svg.append("g");

// Run the renderer. This is what draws the final graph.
render(d3.select("svg g"), g);

const canvas = document.getElementById("svg-canvas");
canvas.setAttribute("width", g.graph().width * 1.2);
canvas.setAttribute("heigh", g.graph().height);

// // Center the graph
var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
svg.attr("height", g.graph().height + 40);