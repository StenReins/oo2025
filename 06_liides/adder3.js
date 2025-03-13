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
var StoringAdder = /** @class */ (function () {
    function StoringAdder() {
        this.store = []; //Massiiv iga numbri hoidmiseks
    }
    StoringAdder.prototype.add = function (nr) {
        this.store.push(nr);
    };
    StoringAdder.prototype.getSum = function () {
        var sum = 0;
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
            var amount = _a[_i];
            sum += amount;
        }
        return sum;
    };
    StoringAdder.prototype.getAverage = function () {
        if (this.store.length > 0) {
            return this.getSum() / this.store.length;
        }
        return 0;
    };
    StoringAdder.prototype.getRange = function () {
        if (this.store.length == 0) {
            return 0;
        }
        var minimum = this.store[0];
        var maximum = minimum;
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
            var amount = _a[_i];
            if (amount < minimum) {
                minimum = amount;
            }
            if (amount > maximum) {
                maximum = amount;
            }
        }
        return maximum - minimum;
    };
    return StoringAdder;
}());
var adder1 = new StoringAdder();
var counter1 = new CharCount(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharCount());
console.log(adder1.getAverage());
console.log(adder1.getRange());
