class Coordinate {
    x;
    y;
    constructor(x, y){
        this.x = x;
        this.y = y
    }
    isInBounds(topX, topY, width, height){
        if (this.x > topX && this.x < width && this.y > topY && this.y < height){
            return true
        } else {
            return false
        }
    }    
}

let click = new Coordinate()

function setup(){
    createCanvas(400, 400);
    background(255);
}

function mouseClicked(){
    click.x = mouseX;
    click.y = mouseY;
    if (click.isInBounds(0, 0, width, height)){
        fill(125, 25, 200);
        ellipse(random(width), random(height), random(100), random(100))
    }
}
