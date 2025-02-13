"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Resistor = /** @class */ (function () {
    function Resistor(r, maxP) {
        this.r = 0;
        this.maxP = 0;
        this.r = r;
        this.maxP = maxP;
    }
    Resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    Resistor.prototype.getPower = function (u) {
        return u * this.getCurrent(u);
    };
    Resistor.prototype.isVoltageAllowed = function (u) {
        return this.getPower(u) < this.maxP;
    };
    return Resistor;
}());
var r1 = new Resistor(220, 0.25);
var r2 = new Resistor(220, 0.5);
var r3 = new Resistor(220, 1);
var takistid = [r1, r2, r3];
var allowedPowerArray = [];
function allowedPowers(u) {
    for (var _i = 0, takistid_1 = takistid; _i < takistid_1.length; _i++) {
        var takisti = takistid_1[_i];
        if (takisti.isVoltageAllowed(u)) {
            allowedPowerArray.push(takisti);
        }
    }
    console.log(allowedPowerArray);
    console.log(takistid.filter(function (takisti) { return takisti.isVoltageAllowed(10); }));
}
allowedPowers(10);
