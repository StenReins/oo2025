class Turtle{
    protected parent:Drawing;
    constructor(protected x:number, protected y:number, protected currentDirection){
        this.x = x;
        this.y = y;
        this.currentDirection = currentDirection;
    }
    directions = ["right", "up", "left", "down"]

    printCurrentLocation(){
        console.log("Location: " + this.x + ", " + this.y + " | " + "Direction: " + this.currentDirection);
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


