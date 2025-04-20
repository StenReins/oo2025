abstract class AbstractResistor{

    abstract getResistance():number;

    getCurrent(u:number):number{
       return u/this.getResistance();
    }
}

abstract class MultipleConnection extends AbstractResistor{
    resistors:AbstractResistor[] =[]

    addResistor(r: AbstractResistor){
        this.resistors.push(r);
    }
}

class ParallelConnection extends MultipleConnection {
    getResistance():number {
        let inverseSum:number = 0;

        for(let resistor of this.resistors){
            inverseSum += 1/resistor.getResistance();
        }
        return 1/inverseSum;
    }
}

class SeriesConnection extends MultipleConnection{
    getResistance(){
        let sum:number = 0
        for(let resistor of this.resistors){
            sum += resistor.getResistance();
        }
        return sum
    }
}

class Resistor extends AbstractResistor{
    r:number = 0
    constructor(r:number){
        super();
        this.r = r;
    }

    getResistance():number {
        return this.r;
    }
}

class Switch extends AbstractResistor{
    private on:boolean = false
    setOn(state:boolean){
        this.on = state;
    }
    getResistance():number{
        return this.on ? 0:100000000
    }
    getCurrent(u:number):number{
        if(u>0 && this.on){
            throw new Error("short circuit");
        }
        return super.getCurrent(u)
    }
}

let p:ParallelConnection = new ParallelConnection();
p.addResistor(new Resistor(100));
p.addResistor(new Resistor(200));
p.addResistor(new Resistor(400));
p.addResistor(new Resistor(800));

let p2:ParallelConnection = new ParallelConnection();
p2.addResistor(new Resistor(110));
p2.addResistor(new Resistor(110));
console.log(p2.getResistance());
//console.log(p.getResistance());

let totalResistance = p.getResistance()
console.log("Total resistance (parallel connection):" + p.getResistance());

let voltage = 5;
let current = voltage/p.getResistance();
console.log(current);

let sc:SeriesConnection = new SeriesConnection();
sc.addResistor(new Resistor(110));
sc.addResistor(new Resistor(110));
console.log("Total Resistance (series connection): " + sc.getResistance());

let sc2:SeriesConnection = new SeriesConnection();
sc2.addResistor(new Resistor(110));
sc2.addResistor(new Resistor(220));

let sc3:SeriesConnection = new SeriesConnection();
sc3.addResistor(new Resistor(220));
sc3.addResistor(new Resistor(440));

console.log("Two series connections resistance: " + (sc2.getResistance() + sc3.getResistance()));
console.log("One series and one parallel connection total resistance: " + (p2.getResistance() + sc2.getResistance()));

let circuit: AbstractResistor[] = [new Resistor(100), new Switch()];

for(let element of circuit){
    console.log(element.getResistance());
}

function sumResistances(element: AbstractResistor[]):number{
    let sum = 0;
    for(let r of element){
        sum += r.getResistance();
    }
    return sum;
}
console.log(sumResistances(circuit));
(circuit[1] as Switch).setOn(true);
console.log(sumResistances(circuit));


let s1 = new Switch();
console.log(s1.getResistance());
s1.setOn(true);
console.log(s1.getResistance());
//console.log(s1.getCurrent(5));

let r1:AbstractResistor = new Resistor(220);
console.log(r1.getResistance());
