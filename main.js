//Browser compatibility check
if (!(window.File && window.FileReader && window.FileList && window.Blob))
{
	alert("This game can't be played on your browser (File API needed). Sorry dude!");
}
else
{
	//CONSTANTS
	const CANVAS_Y = 600;
	const CANVAS_X = 800;
	const MAXTILES_X = 40;
	const MAXTILES_Y = 30;
	//General Variables
	var canvas = document.getElementById("gameSpace");
	var ctx = canvas.getContext("2d");
	var brickSize = CANVAS_X/MAXTILES_X; //Defines the side lengths of the bricks.
	var PositionX = 0; //Defines the x Position of the player.
	var PositionY = 0; //Defines the y Position of the player.
	var drawX; //Defines the center x position from which the map is drawn.
	var drawY; //Defines the center y position from which the map is drawn.
	var map = new Array;
	window.mapLength = 0;
	window.mapIsLoaded = false;
	window.mapX = 0;
	window.mapY = 0;
	//Map Handling stuff
	
	
	function removeNewlines(text) {
		var newText = [];
		var newTextPointer = 0;
		var currentChar;
		for(var i = 0; i < text.length; i++)
		{
				currentChar = text.charAt(i);
				if(currentChar.match(/\r?\n|\r/))
				{
					//don't collect newlines
				}
				else
				{
						newText[newTextPointer] = currentChar;
						newTextPointer++;
				}
		}
		return newText;
	}

	
				
	function loadLevel() {
			var selectedFile = document.getElementById('levelFiles').files[0];
			var textType = /text.*/; //basic regex. Needs to be more concise to not allow .html files
			if (selectedFile.type.match(textType))
			{
					var reader = new FileReader();
					reader.readAsText(selectedFile);
					reader.onload = function(e) {
							var rawMap = (reader.result);
							var arrayMap = removeNewlines(rawMap);
							for(var i = 0; i < arrayMap.length; i++)
							{
								map.push(arrayMap[i]);
							}
							window.mapLength = map.length;
							window.mapIsLoaded = true;
					}		
			}
			else
			{
				console.log("File type not supported!");
				return 1; 
			}
	}
	//end Map Handling stuff

	//Keyboard stuff
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);
	function keyDownHandler(e) {
			if(e.keyCode == 39) {
				rightPressed = true;
				PositionX += 4;
			}
			else if(e.keyCode == 37) {
				leftPressed = true;
				PositionX -= 4;
			}
		}
		function keyUpHandler(e) {
			if(e.keyCode == 39) {
				rightPressed = false;
			}
			else if(e.keyCode == 37) {
				leftPressed = false;
			}
		}
	//End Keyboard Stuff

	//Game Loop Stuff
	function draw() {
		//where animation happens
		drawMap();
	}
	setInterval(draw,10); //run "draw" function every 10 milliseconds (100 fps)
	//End Game Loop Stuff

	function drawMap(){
		var mapX = 0;
		var mapY = 0;
		if (mapIsLoaded)
		{
			for(var j = 0; j < mapLength; j++)
			{
				if(typeof map[j] !== 'undefined')
				{
						switch(map[j]) {
							case '_': //ground token
								createTile(mapX,mapY);
								mapX+=brickSize;
								break;
							case 'O': //air token
							case ' ':
								mapX+=brickSize;
								break;
							case ']': //custom newline token
								mapY+=brickSize; 
								mapX=0;
								break;
							default:
								alert("MAP CONTAINS INVALID CHARACTERS");
								return 1;
						}
				}
			}
		}
	}

	//Game Object Stuff
	function createTile(x,y) {
		ctx.beginPath();
		ctx.rect(x,y,brickSize, brickSize);
		ctx.fillStyle = "silver";
		ctx.strokeStyle = "black";
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}
