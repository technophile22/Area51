var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "Planets Discovery pie chart",
			"color": "#FFFFFF",
			"fontSize": 50
		},
		"subtitle": {
			"color": "#b80000"
		},
		"location": "top-left",
		"titleSubtitlePadding": 15
        
	},
	"footer": {
		"text": "Exo-rious",
		"fontSize": 25,
		"font": "open sans",
		"location": "bottom-left",
        "color": "#FFFFFF"
	},
	"size": {
		"canvasHeight": 600,
		"canvasWidth": 800,
		"pieOuterRadius": "100%"
	},
	"data": {
		"sortOrder": "label-asc",
		"content": [
			{
				"label": "RV",
				"value": 692,
				"color": "#55d2a3"
			},
			{
				"label": "TRANSIT",
				"value": 2712,
				"color": "#f08d11"
			},
			{
				"label": "MICROLENSING",
				"value": 40,
				"color": "#2fb1e7"
			},
			{
				"label": "TIMING",
				"value": 25,
				"color": "#68767b"
			},
			{
				"label": "IMAGING",
				"value": 52,
				"color": "#c64040"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 32,
            "color": "#FFFFFF"
            
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"color": "#FFFFFF",
			"fontSize": 16
		},
		"percentage": {
			"color": "#FFFFFF",
			"fontSize": 11,
			"decimalPlaces": 5
		},
		"value": {
			"color": "#FFFFFF",
			"font": "verdana"
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%",
		"styles": {
			"fadeInSpeed": 343,
			"backgroundOpacity": 0.68,
			"color": "#c6eae7",
			"borderRadius": 14,
			"font": "georgia",
			"fontSize": 20,
			"padding": 8
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 100
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#222222"
		},
		"gradient": {
			"enabled": true,
			"percentage": 100,
			"color": "#ff0000"
		},
		"pieCenterOffset": {
			"y": 15
		}
	},
	"callbacks": {}
});