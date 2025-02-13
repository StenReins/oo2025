import { isStringTextContainingNode } from "typescript";

class Resistor {
    r: number = 0;
    constructor(r: number) { //Initializes the resistor's resistance value (r).
      this.r = r;
    }
    getCurrent(u: number): number {  //Calculates the current based on the voltage (u) and resistance (r).
      return u / this.r;
    }

    getPower(u: number): number { //getPower: Calculates the power based on the voltage (u).
        return u * this.getCurrent(u);
    }
  }
  
  /*let r1: Resistor = new Resistor(220);
  console.log(r1.getCurrent(5));*/

let r1 = new Resistor(110)
let r2 = new Resistor(220)
let r3 = new Resistor(4700)

let takistid:Resistor[] = [r1, r2, r3];
let voolusumma = 0;
for(let takisti of takistid){
    voolusumma+=takisti.getCurrent(5);
}
console.log(voolusumma);

console.log(takistid.reduce((siiani, praegune) => siiani+praegune.getCurrent(5), 0)); //saab sellega ka voolusumma
