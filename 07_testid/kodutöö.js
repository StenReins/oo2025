var Calculator = /** @class */ (function () {
    function Calculator() {
        this.calculationField = document.querySelector('#calculationField');
    }
    Calculator.prototype.add = function (event) {
        if (event) {
            this.calculationField.innerHTML += event.target.value;
        }
    };
    ;
    Calculator.prototype.calculate = function () {
        var _a;
        if (((_a = this.calculationField) === null || _a === void 0 ? void 0 : _a.innerHTML.length) == 0) {
            return "";
        }
        else {
            var result = parseInt(this.calculationField.innerHTML);
            return result;
        }
    };
    return Calculator;
}());
var calc = new Calculator();
var math_symbols = document.querySelectorAll('.math-symbol');
window.onload = function () {
    var _a, _b;
    for (var i = 0; i < 10; i++) {
        (_a = document.querySelector("#number-".concat(i))) === null || _a === void 0 ? void 0 : _a.addEventListener('click', calc.add);
    }
    for (var i = 0; i < math_symbols.length; i++) {
        math_symbols[i].addEventListener('click', calc.add);
    }
    (_b = document.querySelector('#equals')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', function () {
        document.querySelector('#calculationField').innerHTML = calc.calculate().toString();
    });
};
