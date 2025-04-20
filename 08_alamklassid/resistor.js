var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor() {
    }
    AbstractResistor.prototype.getCurrent = function (u) {
        return u / this.getResistance();
    };
    return AbstractResistor;
}());
var MultipleConnection = /** @class */ (function (_super) {
    __extends(MultipleConnection, _super);
    function MultipleConnection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resistors = [];
        return _this;
    }
    MultipleConnection.prototype.addResistor = function (r) {
        this.resistors.push(r);
    };
    return MultipleConnection;
}(AbstractResistor));
var ParallelConnection = /** @class */ (function (_super) {
    __extends(ParallelConnection, _super);
    function ParallelConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParallelConnection.prototype.getResistance = function () {
        var inverseSum = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var resistor = _a[_i];
            inverseSum += 1 / resistor.getResistance();
        }
        return 1 / inverseSum;
    };
    return ParallelConnection;
}(MultipleConnection));
var SeriesConnection = /** @class */ (function (_super) {
    __extends(SeriesConnection, _super);
    function SeriesConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesConnection.prototype.getResistance = function () {
        var sum = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var resistor = _a[_i];
            sum += resistor.getResistance();
        }
        return sum;
    };
    return SeriesConnection;
}(MultipleConnection));
var Resistor = /** @class */ (function (_super) {
    __extends(Resistor, _super);
    function Resistor(r) {
        var _this = _super.call(this) || this;
        _this.r = 0;
        _this.r = r;
        return _this;
    }
    Resistor.prototype.getResistance = function () {
        return this.r;
    };
    return Resistor;
}(AbstractResistor));
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.on = false;
        return _this;
    }
    Switch.prototype.setOn = function (state) {
        this.on = state;
    };
    Switch.prototype.getResistance = function () {
        return this.on ? 0 : 100000000;
    };
    Switch.prototype.getCurrent = function (u) {
        if (u > 0 && this.on) {
            throw new Error("short circuit");
        }
        return _super.prototype.getCurrent.call(this, u);
    };
    return Switch;
}(AbstractResistor));
var p = new ParallelConnection();
p.addResistor(new Resistor(100));
p.addResistor(new Resistor(200));
p.addResistor(new Resistor(400));
p.addResistor(new Resistor(800));
var p2 = new ParallelConnection();
p2.addResistor(new Resistor(110));
p2.addResistor(new Resistor(110));
console.log(p2.getResistance());
//console.log(p.getResistance());
var totalResistance = p.getResistance();
console.log("Total resistance (parallel connection):" + p.getResistance());
var voltage = 5;
var current = voltage / p.getResistance();
console.log(current);
var sc = new SeriesConnection();
sc.addResistor(new Resistor(110));
sc.addResistor(new Resistor(110));
console.log("Total Resistance (series connection): " + sc.getResistance());
var sc2 = new SeriesConnection();
sc2.addResistor(new Resistor(110));
sc2.addResistor(new Resistor(220));
var sc3 = new SeriesConnection();
sc3.addResistor(new Resistor(220));
sc3.addResistor(new Resistor(440));
console.log("Two series connections resistance: " + (sc2.getResistance() + sc3.getResistance()));
console.log("One series and one parallel connection total resistance: " + (p2.getResistance() + sc2.getResistance()));
var circuit = [new Resistor(100), new Switch()];
for (var _i = 0, circuit_1 = circuit; _i < circuit_1.length; _i++) {
    var element = circuit_1[_i];
    console.log(element.getResistance());
}
function sumResistances(element) {
    var sum = 0;
    for (var _i = 0, element_1 = element; _i < element_1.length; _i++) {
        var r = element_1[_i];
        sum += r.getResistance();
    }
    return sum;
}
console.log(sumResistances(circuit));
circuit[1].setOn(true);
console.log(sumResistances(circuit));
var s1 = new Switch();
console.log(s1.getResistance());
s1.setOn(true);
console.log(s1.getResistance());
//console.log(s1.getCurrent(5));
var r1 = new Resistor(220);
console.log(r1.getResistance());
