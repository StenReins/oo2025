var Potentsiomeeter = /** @class */ (function () {
    function Potentsiomeeter(nurkMin, nurkMax, rMin, rMax) {
        this.nurkMin = nurkMin;
        this.nurkMax = nurkMax;
        this.rMin = rMin;
        this.rMax = rMax;
        this.nurk = 0;
    }
    Potentsiomeeter.prototype.muudaNurk = function (delta) {
        var nurk_new = this.nurk + delta;
        if (nurk_new < this.nurkMin) {
            throw new Error("liiga väike nurk");
        }
        if (nurk_new > this.nurkMax) {
            throw new Error("liiga suur nurk");
        }
        this.nurk = nurk_new;
    };
    Potentsiomeeter.prototype.getR = function () {
        //return -1; //arvutage potentsiomeetri praeguse hetke takistuse
        return this.rMin + ((this.nurk - this.nurkMin) / (this.nurkMax - this.nurkMin)) * (this.rMax - this.rMin);
    };
    return Potentsiomeeter;
}());
var p1 = new Potentsiomeeter(-120, 120, 100, 500);
p1.muudaNurk(110);
console.log(p1);
console.log(p1.getR());
