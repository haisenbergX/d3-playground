// http://bl.ocks.org/mbostock/346f4d967650b27c0511
var margin = {top: 40, right: 40, bottom: 40, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var y = d3.scalePoint()
    .domain(d3.range(50))
    .range([0, height]);

var z = d3.scaleLinear()
    .domain([10, 0])
    .range(["hsl(62,100%,90%)", "hsl(228,30%,20%)"])
    .interpolate(d3.interpolateHcl);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.selectAll("circle")
    .data(y.domain())
  .enter().append("circle")
    .attr("r", 25)
    .attr("cx", 0)
    .attr("cy", y)
    .style("fill", function(d) { return z(Math.abs(d % 20 - 10)); })
  .transition()
    .duration(2500)
    .delay(function(d) { return d * 40; })
    .on("start", slide);

function slide() {
  d3.active(this)
      .attr("cx", width)
    .transition()
      .attr("cx", 0)
    .transition()
      .on("start", slide);
}
