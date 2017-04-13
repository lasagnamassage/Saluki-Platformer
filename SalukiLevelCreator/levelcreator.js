var workSpace = document.getElementById("workspace");
var heightInput = document.getElementById("height");
var widthInput = document.getElementById("width");
var fileName = document.getElementById("filename");
var height, width;
const MAX = 50;
var rows = [];


var Row = function(numColumns) {
	this.columns = numColumns;
	this.createEntity = function() {
		var rowDiv = document.createElement('div');
		rowDiv.className = "rowContainer";

		workSpace.appendChild(rowDiv);
		for (var i = 0; i < numColumns; i++)
		{
			var colDiv = document.createElement('div');	
			colDiv.className = "box";
			rowDiv.appendChild(colDiv);
		}
		
	}; 
}

var Box = function(node) {
		this.node = node;
}
function submitInputs() {
	var h = heightInput.value;
	var w = widthInput.value;
	var fn = fileName.value;
	if (isNaN(h) || isNaN(w) || h == "" || w == "" || fn == "") //input check
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
			row.createEntity();
			rows.push(row);

	}
		//To-Do: Lock input fields unless 'reset' is pressed to prevent duplication maps
	

}
