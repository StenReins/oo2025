import { isStringTextContainingNode } from "typescript";

class Resistor {
    r: number = 0;
    maxP: number = 0;
    constructor(r: number, maxP: number) { //Initializes the resistor's resistance value (r).
      this.r = r;
      this.maxP = maxP;
    }
    getCurrent(u: number): number {  //Calculates the current based on the voltage (u) and resistance (r).
      return u / this.r;
    }

    getPower(u: number): number { //getPower: Calculates the power based on the voltage (u).
        return u * this.getCurrent(u);
    }

    isVoltageAllowed(u:number):boolean{
        return this.getPower(u)<this.maxP;
    }
}
let r1 = new Resistor(220, 0.25);
let r2 = new Resistor(220, 0.5);
let r3 = new Resistor(220, 1);
let takistid:Resistor[] = [r1, r2, r3]
let allowedPowerArray:Resistor[] = []

function allowedPowers(u:number){
  for(let takisti of takistid){
    if(takisti.isVoltageAllowed(u)){
      allowedPowerArray.push(takisti);
    }
  }
  console.log(allowedPowerArray);
  // console.log(takistid.filter(takisti => takisti.isVoltageAllowed(10))); saab ka nii leida
}

allowedPowers(10);
