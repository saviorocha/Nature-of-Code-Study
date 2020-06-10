function Walker(x, y) {
    this.x = x;
    this.y = y;
    this.display = function() {
        stroke(0);
        point(this.x, this.y);
    }
    this.step = function() {
    	let stepx = Math.floor(Math.random() * 3) - 1;
    	let stepy = Math.floor(Math.random() * 3) - 1;
    	this.x += stepx;
    	this.y += stepy;
    }
}