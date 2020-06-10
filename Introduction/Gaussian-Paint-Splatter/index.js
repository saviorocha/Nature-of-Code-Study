function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	let stdDeviation = 60;
	let mean = width / 2;
	let randGauss = randomGaussian(mean, stdDeviation);
	
	let rand = (Math.random() * randGauss + randGauss) / (Math.random() * (mean / 10));
	let cond = true;
	
	noStroke();
	fill(randColor(100, 10), randColor(200, 20), randColor(15, 50));

	if (cond) {
		ellipse(randGauss, rand, rand / 30, rand / 30);
		cond = false;
	} else {
		ellipse(rand, randGauss, rand / 30, rand / 30);
		cond = true;
	}
}

function randColor(mean, std) {
	return Math.floor(randomGaussian(mean, std));
}