var workSpace = document.getElementById("workSpace");
var heightInput = document.getElementById("height");
var widthInput = document.getElementById("width");
var height, width;
const MAX = 50;
var rows = [];
var Row = function(numColumns) {
	this.numColumns=numColumns;
	this.boxes = [];
	this.createRow = function() {
		var node = document.createElement("DIV");
		node.classname="row-container";
		for (var i = 0; i < numColumns; i++)
		{
				var innernode = document.createElement("DIV");
				innernode.classname="Box";
				var box = new Box(innernode);
				this.boxes.push(box);
				node.appendChild(innernode);
		}
		workSpace.appendChild(node);
	};
}

var Box = function(node) {
		this.node = node;
}
function submitInputs() {
	var h = heightInput.value;
	var w = widthInput.value;
	if (isNaN(h) || isNaN(w) || h == "" || w == "")
		alert("Ya dun goofed");
	else if (h > MAX || w > MAX || h < 0 || w < 0)
	{
			alert("Only accepts positive integers up to " + MAX);
	}
	else
	{
			var dimensions = [h,w];
			console.log(dimensions);
			drawMap(dimensions);
	}
}

function drawMap(dimensions) {
	var r = dimensions[0];
	var c = dimensions[1];
	//draw rows
	for (var i = 0; i < r; i++)
	{
			var row = new Row(c);
			row.createRow();
			rows.push(row);
	}
}