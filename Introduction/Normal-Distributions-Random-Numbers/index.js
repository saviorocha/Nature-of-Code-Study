function setup() {
	createCanvas(640, 240);
}

function draw() {
	let stdDeviation = 60;
	let mean = 320;
	let randGauss = randomGaussian(mean, stdDeviation);

	// let x = stdDeviation * randGauss + mean; 

	noStroke(); 	
	fill(0, 10);
	ellipse(randGauss, 186, 16, 16);
}
