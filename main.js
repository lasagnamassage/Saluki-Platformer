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
	var SpeedX = 0;
	var SpeedY = 0;
	var drawX; //Defines the center x position from which the map is drawn.
	var drawY; //Defines the center y position from which the map is drawn.
	var map = new Array;
	var upPressed;
	var downPressed;
	var rightPressed;
	var leftPressed;
	window.mapLength = 0;
	window.mapIsLoaded = false;
	//Map Handling stuff
	
	
	function removeNewlines(text) {
		var newText = [];
		var newTextPointer = 0;
		var currentChar;
		for(var i = 0; i < text.length; i++)
		{
				currentChar = text.charAt(i);
				if(currentChar.match(/\r?\n|\r/)) //newline regex. Some editors use \r, some \n, and some neither of these...decided it's best to just use our own
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
			}
			if(e.keyCode == 37) {
				leftPressed = true;
			}	
			if(e.keyCode == 38) {
				upPressed = true;
			}			
			if(e.keyCode == 40) {
				downPressed = true;
			}
		}
	function keyUpHandler(e) {
			if(e.keyCode == 39) {
				rightPressed = false;
			}
			if(e.keyCode == 37) {
				leftPressed = false;
			}
			if(e.keyCode == 38) {
				upPressed = false;
			}
			if(e.keyCode == 40) {
				downPressed = false;
			}
		}
	//End Keyboard Stuff

	//Game Loop Stuff
	function draw() {
		drawMap();
		drawDawg();
	}
	setInterval(draw,10); //run "draw" function every 10 milliseconds (100 fps)
	//End Game Loop Stuff
	setInterval(move,10);
	setInterval(accelerate,10)
	
	function accelerate(){ //
		if(upPressed)
		{
			SpeedY+=1;
		}
		else if(!upPressed){
		
		}
		
		if(downPressed)
		{
			SpeedY-=1;
		}
		else if(!downPressed)
		{
		
		}
		if(leftPressed)
		{
			if(SpeedX <= 3)
				SpeedX+=1;
		}
		else if(!leftPressed){
		
		}
		if(rightPressed)
		{
			if(SpeedX >= -3)
			SpeedX-=1;
		}
		else if(!rightPressed && !leftPressed){
			if(SpeedX < 0)
				SpeedX+=1;
			else if(SpeedX > 0)
				SpeedX-=1;
		}
	}
	
	function move(){
		PositionX+=SpeedX;
		PositionY+=SpeedY;
		MapX = 20*(Math.round(PositionX/20));
		MapY = 20*(Math.round(PositionY/20));
		createTile(MapX*20,MapY*20);
	}
	
	function drawDawg(){
		ctx.beginPath();
		ctx.arc(400,300,10,0,2*Math.PI,false);
		ctx.fillStyle = "blue";
		ctx.strokeStyle = "black";
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
	
	function drawMap(){
		drawX = 0;
		drawY = 0;
		if (mapIsLoaded)
		{
		ctx.clearRect(0, 0, canvas.width, canvas.height);
			for(var j = 0; j < mapLength; j++)
			{
				if(typeof map[j] !== 'undefined')
				{
						switch(map[j]) {
							case '_': //ground token
								createTile(drawX,drawY);
								drawX+=brickSize;
								break;
							case 'O': //air token
							case ' ':
								drawX+=brickSize;
								break;
							case ']': //custom newline token
								drawY+=brickSize; 
								drawX=0;
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
		if(!((x+PositionX)<=-20 || (x+PositionX)>=820 || (y+PositionY)<=-20 || (y+PositionY)>=620)) //Only draw if inside canvas
		{
		ctx.beginPath();
		ctx.rect(x+PositionX,y+PositionY,brickSize, brickSize);
		ctx.fillStyle = "silver";
		ctx.strokeStyle = "black";
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
		}
	}
}
