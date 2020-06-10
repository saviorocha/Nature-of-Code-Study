let walker;
function draw() {
	walker.step();
	walker.display();
}

function setup() {
	createCanvas(640, 360);
	background(255);
	walker = new Walker(width / 2, height / 2);
}