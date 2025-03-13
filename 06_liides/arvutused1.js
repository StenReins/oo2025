var CMtoInches = /** @class */ (function () {
    function CMtoInches() {
    }
    CMtoInches.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    CMtoInches.prototype.inputUnit = function () {
        return "cm";
    };
    CMtoInches.prototype.outputUnit = function () {
        return "in";
    };
    return CMtoInches;
}());
var InchestoCM = /** @class */ (function () {
    function InchestoCM() {
    }
    InchestoCM.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    InchestoCM.prototype.inputUnit = function () {
        return "in";
    };
    InchestoCM.prototype.outputUnit = function () {
        return "cm";
    };
    return InchestoCM;
}());
