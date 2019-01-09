function setup() {
createCanvas(500,500, WEBGL);
background(0);
	
}

function draw() {

//background(0);
	var c = color(122, 224, 0);
fill(c)
triangle(mouseX,mouseY, 75, 50, 100, 100);
var c = color(mouseX, mouseY, 0);
ellipse(mouseX, mouseY, 50);
fill(c)
rotateY(millis() / 1000);
sphere(100);
}