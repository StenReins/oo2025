class Turtle {
    x;
    y;
    currentDirection;
    parent;
    constructor(x, y, currentDirection) {
        this.x = x;
        this.y = y;
        this.currentDirection = currentDirection;
        this.x = x;
        this.y = y;
        this.currentDirection = currentDirection;
    }
    directions = ["right", "up", "left", "down"];
    printCurrentLocation() {
        console.log("Location: " + this.x + ", " + this.y + " | " + "Direction: " + this.currentDirection);
    }
    forward() {
        let forward = document.querySelector('#forward');
        forward?.addEventListener('click', () => {
            this.x = this.x + 10;
        });
    }
}
class Drawing {
    g;
    x;
    y;
    constructor(g, x, y) {
        this.g = g;
        this.x = x;
        this.y = y;
    }
    draw() {
        this.g.clearRect(this.x, this.y, this.x + 60, this.y + 60);
        this.g.fillStyle = "black";
        this.g.beginPath();
        this.g.rect(this.x, this.y, this.x + 50, this.y + 50);
        this.g.closePath();
        this.g.fill();
    }
}
