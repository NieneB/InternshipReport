var hoofdstukken =  d3.selectAll("h1, h2, h3")
console.log(hoofdstukken)


var tov = d3.select("#toc").append("ul").attr("class", "toc")

var hoofdstuk = hoofdstukken[0].filter(function(d){
  return d.className == ""
})
console.log(hoofdstuk)
tov.selectAll("li")
  .data(hoofdstuk)
  .enter()
  .append("li")
  .attr("class", function(d){
  return "toc-"+ d.localName
})
  .append("a")
  .attr("class", "xref")
  .attr("href", function(d){
    return "#" + d.id
  })
  .text(function(d){
    return d.innerHTML });
  

  
