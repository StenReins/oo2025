class Turtle {
    x;
    y;
    g;
    constructor(x, y, g) {
        this.x = x;
        this.y = y;
        this.g = g;
        this.x = x;
        this.y = y;
        this.g = g;
    }
    directions = ["right", "up", "left", "down"];
    draw() {
        this.g.clearRect(this.x, this.y, this.x + 60, this.y + 60);
        this.g.beginPath();
        this.g.fillRect(this.x, this.y, this.x + 3, this.y + 3);
        this.g.closePath();
    }
    forward() {
        let forward = document.querySelector('#forward');
        forward?.addEventListener('click', () => {
            this.x = this.x + 50;
            this.draw();
        });
    }
}
