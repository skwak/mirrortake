var svg = d3.select("#top-logo")
            .append("svg")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 75)
            .attr("height", 75);

var logo = svg.append("g");

var x = 0,
    y = 0,
    width = 75,
    height = 75;

while (x <= 35) {
  if (x % 10 === 0) {
    var rect = logo.append("rect")
                   .attr("x", x)
                   .attr("y", y)
                   .attr("width", width)
                   .attr("height", height)
                   .style("fill", "#fff");
  } else {
    var rect = logo.append("rect")
                   .attr("x", x)
                   .attr("y", y)
                   .attr("width", width)
                   .attr("height", height)
                   .style("fill", "#000");
  }

  x += 5;
  y += 5;
  width -= 10;
  height -= 10;
}
