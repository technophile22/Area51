window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Number Of Planets Discoverd in a Year"
	},
	axisX: {
		
		title:"YEAR OF DISCOVERY",
	},
	axisY:{
		title:"NUMBER OF PLANETS",
		includeZero: false
	},
	data: [{        
		type: "line",       
		dataPoints: [
			{x:2019,y:53},
			{x:2018,y:45},
			{x:2017,y:146},
			{ x:2016,y: 1415, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
			{x:2015,y: 199 },
			{x:2014 ,y: 928},
			
			{ x:2013,y: 140 },
			{ x:2012,y: 131 },
			{ x:2011,y: 189 },
			{ x:2010,y: 120 },
			{ x:2009,y: 81 },
			{ x:2008,y: 66 },
			{ x:2007,y: 64 },
			{ x:2006,y: 30 },
			{ x:2005,y: 34 },
			{ x:2004,y: 30 },
			{ x:2003,y: 25 },
			{ x:2002,y: 25 },
			{ x:2001,y: 13},
			{ x:2000,y: 20},
			{ x:1999,y: 11},
			{ x:1998,y: 5},
			{ x:1997,y: 1},
			{ x:1996,y: 6},
			{ x:1995,y: 1},
			{ x:1994,y: 1},
			{ x:1993,y: 0},
			{ x:1992,y: 4},
			{ x:1991,y: 0},
		]
	}]
});
chart.render();

}