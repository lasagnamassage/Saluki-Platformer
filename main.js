//General Variables
var canvas = document.getElementById("gameSpace");
var ctx = canvas.getContext("2d");
var brickSize = 20; //Defines the side lengths of the bricks.
var PositionX = 0; //Defines the x Position of the player.
var PositionY = 0; //Defines the y Position of the player.
var drawX; //Defines the center x position from which the map is drawn.
var drawY; //Defines the center y position from which the map is drawn.
	
//Keyboard stuff
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
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
