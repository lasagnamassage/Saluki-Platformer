//General Variables
var canvas = document.getElementById("gameSpace");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

//Keyboard stuff

//End Keyboard Stuff

//Game Loop Stuff
function gameLoop() {
	//where the magic happens	
}
setInterval(draw,10); //run "draw" function every 10 milliseconds (100 fps)
//End Game Loop Stuff


