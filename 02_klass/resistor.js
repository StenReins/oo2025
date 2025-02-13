"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Resistor = /** @class */ (function () {
    function Resistor(r) {
        this.r = 0;
        this.r = r;
    }
    Resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    Resistor.prototype.getPower = function (u) {
        return u * this.getCurrent(u);
    };
    return Resistor;
}());
/*let r1: Resistor = new Resistor(220);
console.log(r1.getCurrent(5));*/
var r1 = new Resistor(110);
var r2 = new Resistor(220);
var r3 = new Resistor(4700);
var takistid = [r1, r2, r3];
var voolusumma = 0;
for (var _i = 0, takistid_1 = takistid; _i < takistid_1.length; _i++) {
    var takisti = takistid_1[_i];
    voolusumma += takisti.getCurrent(5);
}
console.log(voolusumma);
console.log(takistid.reduce(function (siiani, praegune) { return siiani + praegune.getCurrent(5); }, 0)); //saab sellega ka voolusumma
