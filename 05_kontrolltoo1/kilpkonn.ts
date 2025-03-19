class Turtle{
    protected parent:Drawing;
    constructor(protected x:number, protected y:number, protected currentDirection, protected g){
        this.x = x;
        this.y = y;
        this.currentDirection = currentDirection;
    }
    directions = ["right", "up", "left", "down"]

    printCurrentLocation(){
        console.log("Location: " + this.x + ", " + this.y + " | " + "Direction: " + this.currentDirection);
    }
    draw(g:any){
        this.g.fillStyle = 'green';
        this.g.beginPath();
        this.g.arc(this.x,this.y, 5, 0, 180 * Math.PI() / 180, true);
        this.g.fill();
    }
    edasi(){
        let forward = document.querySelector('#forward');
        forward?.addEventListener('click', () =>{
            this.x = this.x + 10;
        });
    }
    keeraParemale(){
        
    }
}

class Drawing{
    constructor(){}

}


