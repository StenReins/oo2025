//Liides numbrite liitmiseks
interface Adder{
    add(nr:number):void; //Meetod numbri lisamiseks
    getSum():number; //Meetod summa saamiseks
    reset():void; //Meetod summa nullimiseks
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

class SimpleAdder implements Adder{
    protected sum:number = 0; //Algne summa
    add(nr:number){ //lisab antud numbri summale
        this.sum += nr;
    }  
    getSum():number{ //tagastab praeguse summa
        return this.sum
    }

    reset():void{
        this.sum = 0;
    }

}

let adder1: Adder = new SimpleAdder();
let counter1: CharCount = new CharCount(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharCount());
/*adder1.add(3);
adder1.add(5);
adder1.add(5);
console.log(adder1.getSum())
adder1.reset();
console.log(adder1.getSum());*/

