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
var labels = ['Beginner', 'Novice', 'Intermediate', 'Advanced', 'Elite'];
var Stats = /** @class */ (function () {
    function Stats(bodyWeight, sex) {
        this.bodyWeight = bodyWeight;
        this.sex = sex;
        this.bodyWeight = bodyWeight;
        this.sex = sex;
    }
    Stats.prototype.getReport = function () {
        var lift = this.getLiftWeight();
        var strlevel = parseFloat((lift / this.bodyWeight).toFixed(2));
        return {
            sex: this.sex,
            bodyWeight: this.bodyWeight,
            exerciseName: this.getExerciseName(),
            lift_weight: lift,
            relativeStrength: strlevel,
            rank: this.calcRank(strlevel)
        };
    };
    Stats.prototype.calcRank = function (strlevel) {
        var stds = this.getStandards()[this.sex];
        var rank = 0;
        for (var i = 0; i < stds.length; i++) {
            if (strlevel >= stds[i]) {
                rank = i;
            }
        }
        return labels[rank];
    };
    return Stats;
}());
var Bench = /** @class */ (function (_super) {
    __extends(Bench, _super);
    function Bench(bodyWeight, sex, lift_weight) {
        var _this = _super.call(this, bodyWeight, sex) || this;
        _this.bodyWeight = bodyWeight;
        _this.sex = sex;
        _this.lift_weight = lift_weight;
        _this.lift_weight = lift_weight;
        return _this;
    }
    Bench.prototype.getStandards = function () {
        return {
            'mees': [0.5, 0.75, 1.0, 1.5, 2.0],
            'naine': [0.25, 0.4, 0.7, 1.0, 1.25]
        };
    };
    Bench.prototype.getExerciseName = function () {
        return 'Rinnalt surumine';
    };
    Bench.prototype.getLiftWeight = function () {
        return this.lift_weight;
    };
    return Bench;
}(Stats));
var bench = new Bench(78, 'mees', 90);
console.log(bench.getReport());
