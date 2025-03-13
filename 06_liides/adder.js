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
var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0; //Algne summa
    }
    SimpleAdder.prototype.add = function (nr) {
        this.sum += nr;
    };
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    SimpleAdder.prototype.reset = function () {
        this.sum = 0;
    };
    return SimpleAdder;
}());
var adder1 = new SimpleAdder();
var counter1 = new CharCount(adder1);
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
