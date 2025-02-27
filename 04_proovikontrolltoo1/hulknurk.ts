class Kolmnurk{
    constructor(protected x:number, protected y:number){
        this.x = x
        this.y = y
    }
    static xkoordinaadid:number[] = []
    static ykoordinaadid:number[] = []

    static addCoordinates(koordinaadid:Kolmnurk){
        Kolmnurk.xkoordinaadid.push(koordinaadid.x)
        Kolmnurk.ykoordinaadid.push(koordinaadid.y)
    }

    static showArrays(){
        console.log(Kolmnurk.xkoordinaadid, Kolmnurk.ykoordinaadid)
    }
    
    static ümbermõõt(){
        /*let a = 4
        let b = 7*/
        let result:number = 0
        let sides:number[] = []
        let total:number = 0
        for(let i=0; i<this.xkoordinaadid.length; i++){
            result = Math.abs(this.xkoordinaadid[i] + this.ykoordinaadid[i])
            sides.push(result)
            total += sides[i]
        }
        return console.log(sides, total)
    }

    draw(g:any):void {
        g.beginPath();
        g.moveTo(Kolmnurk.xkoordinaadid[0], Kolmnurk.ykoordinaadid[0]);
        for(let nr=1; nr<Kolmnurk.xkoordinaadid.length; nr++){
            g.lineTo(Kolmnurk.xkoordinaadid[nr], Kolmnurk.ykoordinaadid[nr]);

        }
        g.lineTo(Kolmnurk.xkoordinaadid[0], Kolmnurk.ykoordinaadid[0]);
        g.stroke();
    }
}