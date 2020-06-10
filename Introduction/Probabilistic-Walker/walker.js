function Walker(x, y) {
    this.x = x;
    this.y = y;
    this.display = function() {
        stroke(0);
        point(this.x, this.y);
    }
    this.step = function() {
        let randomNum = Math.random();
        let stepx;
        let stepy;
        if (randomNum < 0.5) {
        	stepx = Math.floor(Math.random() * 3) - 1;
        	stepy = Math.floor(Math.random() * 3) - 1;
        } else {
            stepx = ((mouseX - this.x) > 0) - ((mouseX - this.x) < 0);
            stepy =  ((mouseY - this.y) > 0) - ((mouseY - this.y) < 0);
        }
        this.x += stepx;
        this.y += stepy;
    }
}
