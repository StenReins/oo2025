class Potentsiomeeter{
    nurk:number = 0
    
    constructor(protected nurkMin: number, protected nurkMax:number, protected rMin:number, protected rMax:number){}

    muudaNurk(delta:number):void{
        let nurk_new = this.nurk+delta
        if(nurk_new <this.nurkMin){
            throw new Error("liiga väike nurk");
        }
        if(nurk_new >this.nurkMax){
            throw new Error("liiga suur nurk");
        }
        this.nurk = nurk_new
    }

    getR():number{
        //return -1; //arvutage potentsiomeetri praeguse hetke takistuse
        return this.rMin + ((this.nurk - this.nurkMin)/(this.nurkMax - this.nurkMin)) * (this.rMax - this.rMin);
    }
}

let p1:Potentsiomeeter = new Potentsiomeeter(-120, 120, 100, 500);
p1.muudaNurk(110);
console.log(p1);
console.log(p1.getR())

