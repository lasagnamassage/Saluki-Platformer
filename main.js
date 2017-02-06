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
	

	//Map Handling stuff
	
	function parseMap(map) {
		var sentinelValue = '`';
		var ground = '_';
		var space = ' ';
		var currentChar;
		while(currentChar != sentinelValue)
		{
				//to be completed!
		}
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
							
							//var parsedMap = parseMap(rawMap);
							/*
							for(var i = 0; i < 30; i++)
							{
								for(var j = 0; j < 40; j++)
								{
										switch(rawMap[k]) {
											case '_':
												setTile(currentX,currentY,"Tile");
												break;
											case ' ':
												set
										}
								}
							}*/
					}		
			}
			else
			{
				console.log("File type not supported!");
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
	function gameLoop() {
		//where the magic happens	
		draw();
	}
	setInterval(draw,10); //run "draw" function every 10 milliseconds (100 fps)
	//End Game Loop Stuff

	function draw(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawMap();
		drawSprites();
		drawPlayer();
		drawInfo();
	}

	function drawMap(){ //Draws the bricks
		
		// Drawing a primitive test map that is just a straight line.
		createTile();
	}

	//Game Object Stuff
	function createTile() {
			for(xStep=0;xStep<canvas.width/brickSize;xStep++)
		{
		ctx.beginPath();
		ctx.rect(xStep*brickSize + PositionX, canvas.height/2, brickSize, brickSize);
		ctx.fillStyle = "silver";
		ctx.strokeStyle = "black";
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

		}
	}

	function drawSprites(){ //Draws the sprites (extra objects on the map)
		
	}

	function drawPlayer(){ //Draws the player character, Grey Dog. 
		
	}

	function drawInfo(){ //Draws an information bar with score, stats, etc.
		
	}
}
