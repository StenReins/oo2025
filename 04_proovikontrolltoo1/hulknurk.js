var Kolmnurk = /** @class */ (function () {
    function Kolmnurk(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Kolmnurk.addCoordinates = function (koordinaadid) {
        Kolmnurk.xkoordinaadid.push(koordinaadid.x);
        Kolmnurk.ykoordinaadid.push(koordinaadid.y);
    };
    Kolmnurk.showArrays = function () {
        console.log(Kolmnurk.xkoordinaadid, Kolmnurk.ykoordinaadid);
    };
    Kolmnurk.ümbermõõt = function () {
        /*let a = 4
        let b = 7*/
        var result = 0;
        var sides = [];
        var total = 0;
        for (var i = 0; i < this.xkoordinaadid.length; i++) {
            result = Math.abs(this.xkoordinaadid[i] + this.ykoordinaadid[i]);
            sides.push(result);
            total += sides[i];
        }
        return console.log(sides, total);
    };
    Kolmnurk.prototype.draw = function (g) {
        g.beginPath();
        g.moveTo(Kolmnurk.xkoordinaadid[0], Kolmnurk.ykoordinaadid[0]);
        for (var nr = 1; nr < Kolmnurk.xkoordinaadid.length; nr++) {
            g.lineTo(Kolmnurk.xkoordinaadid[nr], Kolmnurk.ykoordinaadid[nr]);
        }
        g.lineTo(Kolmnurk.xkoordinaadid[0], Kolmnurk.ykoordinaadid[0]);
        g.stroke();
    };
    Kolmnurk.xkoordinaadid = [];
    Kolmnurk.ykoordinaadid = [];
    return Kolmnurk;
}());
