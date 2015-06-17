var svg = d3.select("#top-logo")
            .append("svg")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 75)
            .attr("height", 75);

var logo = svg.append("g");

var rect = logo.append("rect")
               .attr("x", 0)
               .attr("y", 0)
               .attr("width", 75)
               .attr("height", 75)
               .style("fill", "#fff");

var smallerRect = logo.append("rect")
                      .attr("x", 5)
                      .attr("y", 5)
                      .attr("width", 65)
                      .attr("height", 65)
                      .style("fill", "#000");

var smallerRect2 = logo.append("rect")
                       .attr("x", 10)
                       .attr("y", 10)
                       .attr("width", 55)
                       .attr("height", 55)
                       .style("fill", "#fff");

var smallerRect3 = logo.append("rect")
                       .attr("x", 15)
                       .attr("y", 15)
                       .attr("width", 45)
                       .attr("height", 45)
                       .style("fill", "#000");

var smallerRect4 = logo.append("rect")
                       .attr("x", 20)
                       .attr("y", 20)
                       .attr("width", 35)
                       .attr("height", 35)
                       .style("fill", "#fff");

var smallerRect5 = logo.append("rect")
                       .attr("x", 25)
                       .attr("y", 25)
                       .attr("width", 25)
                       .attr("height", 25)
                       .style("fill", "#000");

var smallerRect6 = logo.append("rect")
                       .attr("x", 30)
                       .attr("y", 30)
                       .attr("width", 15)
                       .attr("height", 15)
                       .style("fill", "#fff");

var smallerRect7 = logo.append("rect")
                       .attr("x", 35)
                       .attr("y", 35)
                       .attr("width", 5)
                       .attr("height", 5)
                       .style("fill", "#000");
