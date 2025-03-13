//Liides numbrite liitmiseks
interface Adder{
    add(nr:number):void; //Meetod numbri lisamiseks
    getSum():number; //Meetod summa saamiseks
    getAverage():number;
    getRange();
}

class CharCount{
    //Constructor, that takes an "adder" object as a parameter and stores it in a protected variable
    constructor(protected adder: Adder){}
    //Method for getting the total character count in "word" string and adding it to the adder variable
    addWordCharacters(word: string): void {
        this.adder.add(word.length);
    }
    //Method to get the count of characters in "adder"
    getCharCount():number{
        return this.adder.getSum();
    }

}

class StoringAdder implements Adder{
    protected store:number[] = []; //Massiiv iga numbri hoidmiseks

    add(nr:number){ //lisab antud numbri summale
        this.store.push(nr);
    }
    getSum():number{ //tagastab praeguse summa
        let sum:number = 0
        for(let amount of this.store){
            sum += amount;
        }
        return sum;
    }
    getAverage(){ //Leiab summa ja numbrite arvu abil keskmise
        if(this.store.length > 0){
            return this.getSum()/this.store.length
        }
        return 0;
    }

    getRange(){
        if(this.store.length == 0){
            return 0;
        }
        let minimum:number = this.store[0];
        let maximum:number = minimum;
        for(let amount of this.store){
            if(amount<minimum){
                minimum = amount;
            }
            if(amount > maximum){
                maximum = amount;
            }
        }
        return maximum-minimum;
    }

}

let adder1: Adder = new StoringAdder();
let counter1: CharCount = new CharCount(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharCount());
console.log(adder1.getAverage());
console.log(adder1.getRange());



