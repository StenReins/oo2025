var CharCount = /** @class */ (function () {
    //Constructor, that takes an "adder" object as a parameter and stores it in a protected variable
    function CharCount(adder) {
        this.adder = adder;
    }
    //Method for getting the total character count in "word" string and adding it to the adder variable
    CharCount.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length);
    };
    //Method to get the count of characters in "adder"
    CharCount.prototype.getCharCount = function () {
        return this.adder.getSum();
    };
    return CharCount;
}());
var CountingAdder = /** @class */ (function () {
    function CountingAdder() {
        this.sum = 0; //Algne summa
        this.count = 0; //Loetleb, palju numbreid me oleme summasse lisanud
        /*reset():void{
            this.sum = 0;
        }*/
    }
    CountingAdder.prototype.add = function (nr) {
        this.sum += nr;
        this.count++; //Lisab numbrite arvule ühe juurde, kui summale lisatakse number
    };
    CountingAdder.prototype.getSum = function () {
        return this.sum;
    };
    CountingAdder.prototype.getAverage = function () {
        if (this.count > 0) { //Kas numbreid on lisatud või mitte, kui on siis leiab keskmise
            return this.sum / this.count;
        }
        return 0;
    };
    return CountingAdder;
}());
var adder1 = new CountingAdder();
var counter1 = new CharCount(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(adder1.getAverage());
