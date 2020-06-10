let randomCounts;

function setup() {
	createCanvas(640, 240);
	randomCounts = new Array(20).fill(0);
}

function draw() {
	background(255);

	let index = Math.floor(Math.random() * randomCounts.length);
//	let index = randomGaussian(320, 60);
	randomCounts[index]++;

	stroke(0);
	fill(175);

	let w = width / randomCounts.length;

	for (let i = 0; i < randomCounts.length; i++) {
    	rect(i * w, height - randomCounts[i], w - 1, randomCounts[i]);
    }
    // console.log(randomCounts.toString());
}
