var svg = d3.select("#top")
            .append("svg")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 100)
            .attr("height", 100);

var rect = svg.append("rect")
              .attr("x", 0)
              .attr("y", 0)
              .attr("width", 90)
              .attr("height", 90)
              .style("fill", "#000");
