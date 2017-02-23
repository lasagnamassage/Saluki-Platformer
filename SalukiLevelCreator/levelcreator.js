var rowContainer = "<div class = 'rowContainer'>";
var box = "<div class = 'box'>"
var endDiv = "</div>"
var workSpace = document.getElementById("workSpace");
var heightInput = document.getElementById("height");
var widthInput = document.getElementById("width");
var height, width;
var validInput = /[0-9]/; //regex for nu
//This function clears the workspace
function clear() {
	workSpace.innerHTML = '';
}
//This function gets data from input
function getInput(input) {
	if (input.value.length == 0) {
		alert(input + "input is empty");
		return false;
	}
	else
	{
		for(var i = 0; i < input.value.length; i++)
		{
		
				if (!validInput.test(parseInt(input.value.charAt(i)))) {
					alert("You've entered invalid input bruh.\nNumbers only");	
					return false;
				}
		}
		return input.value;
	}
}
//returns height input
function getHeightInput(){ return getInput(heightInput); }
//returns width input
function getWidthInput(){ return getInput(widthInput); }
//grabs all inputs
function getInputs() {
	height = getHeightInput();
	width = getWidthInput();
	setWorkSpace(width,height);
}

function setWorkSpace(width, height) {
		for (var i = 0; i < height; i++)
		{
			workSpace.appendChild(rowContainer);
			for (var j = 0; j < width; j++)
			{
				workSpace.appendChild(box);
				workSpace.appendChild(endDiv);
			}
			workSpace.appedChild(endDiv);
		}
}