//Liides numbrite liitmiseks
interface Adder{
    add(nr:number):void; //Meetod numbri lisamiseks
    getSum():number; //Meetod summa saamiseks
    getAverage():number;
    //reset():void; //Meetod summa nullimiseks
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

class CountingAdder implements Adder{
    protected sum:number = 0; //Algne summa
    protected count:number = 0; //Loetleb, palju numbreid me oleme summasse lisanud

    add(nr:number){ //lisab antud numbri summale
        this.sum += nr;
        this.count++; //Lisab numbrite arvule ühe juurde, kui summale lisatakse number
    }
    getSum():number{ //tagastab praeguse summa
        return this.sum
    }
    getAverage(){ //Leiab summa ja numbrite arvu abil keskmise
        if(this.count>0){ //Kas numbreid on lisatud või mitte, kui on siis leiab keskmise
            return this.sum/this.count;
        }
        return 0;
    }

    /*reset():void{
        this.sum = 0;
    }*/

}

let adder1: Adder = new CountingAdder();
let counter1: CharCount = new CharCount(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(adder1.getAverage());


