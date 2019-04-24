d3.csv('../data/exo1.csv', function (data) {
  // Variables
  var body = d3.select('#my_dataviz')
	var margin = { top: 50, right: 50, bottom: 50, left: 50 }
	var h = 800 - margin.top - margin.bottom
	var w = 800 - margin.left - margin.right
	var formatPercent = d3.format('1')
	var yformat = d3.format('5')
	// Scales
  var colorScale = d3.scale.category20()
  var xScale = d3.scale.linear()
    .domain([
    	d3.min([0,d3.min(data,function (d) { return d.RadiusJpt })]),
    	d3.max([0,d3.max(data,function (d) { return d.RadiusJpt })])
    	])
    .range([0,w])
  var yScale = d3.scale.linear()
    .domain([
    	d3.min([0,d3.min(data,function (d) { return d.PlanetaryMassJpt })]),
    	d3.max([0,d3.max(data,function (d) { return d.PlanetaryMassJpt })])
    	])
    .range([h,0])
	// SVG
	var svg = body.append('svg')
	    .attr('height',h + margin.top + margin.bottom)
	    .attr('width',w + margin.left + margin.right)
	  .append('g')
	    .attr('transform','translate(' + margin.left + ',' + margin.top + ')')
	// X-axis
	var xAxis = d3.svg.axis()
	  .scale(xScale)
	  .tickFormat(formatPercent)
	  .ticks(10)
	  .orient('bottom')
  // Y-axis
	var yAxis = d3.svg.axis()
	  .scale(yScale)
	  .tickFormat(yformat)
	  .ticks(10)
	  .orient('left')
    
  // Circles
  var circles = svg.selectAll('circle')
      .data(data)
      .enter()
    .append('circle')
      .attr('cx',function (d) { return xScale(d.RadiusJpt) })
      .attr('cy',function (d) { return yScale(d.PlanetaryMassJpt) })
      .attr('r',function (d) { return (d.SurfaceTempK)/100})
      .attr('stroke','black')
      .attr('stroke-width',1)
      .attr('fill',function (d,i) { return colorScale(i) })
      .on('mouseover', function () {
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r',30)
          .attr('stroke-width',3)
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r',function (d) { return (d.SurfaceTempK)/100})
          .attr('stroke-width',1)
      })
    .append('title') // Tooltip
      .text(function (d) { return 'Name : ' + d.PlanetIdentifier +
                           '\nPlanetry Mass(jpt): ' + yformat(d.PlanetaryMassJpt) + 
                           '\n Radius : ' + formatPercent(d.RadiusJpt) +
		  					'\n Temperature : ' + d.SurfaceTempK + "k"
						 })
  // X-axis
  svg.append('g')
      .attr('class','axis')
      .attr('transform', 'translate(0,' + h + ')')
      .call(xAxis)
    .append('text') // X-axis Label
      .attr('class','label')
      .attr('y',-10)
      .attr('x',w)
      .attr('dy','.71em')
      .style('text-anchor','end')
      .text('Radius')
  // Y-axis
  svg.append('g')
      .attr('class', 'axis')
      .call(yAxis)
    .append('text') // y-axis Label
      .attr('class','label')
      .attr('transform','rotate(-90)')
      .attr('x',0)
      .attr('y',5)
      .attr('dy','.71em')
      .style('text-anchor','end')
      .text('Planetry Mass')
})