var hoofdstukken =  d3.selectAll("h1, h2, h3")
console.log(hoofdstukken)


var tov = d3.select("#toc").append("ol")

tov.selectAll("li")
  .data(hoofdstukken[0])
  .enter()
  .append("li")
  .text(function(d){
     return d.innerHTML});
