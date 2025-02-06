var Vektor = /** @class */ (function () {
    function Vektor(x, y) {
        this.x = x;
        this.y = y;
    }
    Vektor.prototype.kuva = function () {
        console.log(this.x, this.y);
    };
    Vektor.prototype.pikkus = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vektor.prototype.liida = function (teine) {
        return new Vektor(this.x + teine.x, this.y + teine.y);
    };
    //Loo käsklus vektori korrutamiseks arvuga
    Vektor.prototype.korruta = function (arv) {
        return new Vektor(this.x * arv, this.y * arv);
    };
    //Suurenda X-i väärtust
    Vektor.prototype.suurendaX = function () {
        this.x += 1;
    };
    //Kahe vektori skalaarkorrutis
    Vektor.prototype.skalaarKorrutis = function (teine) {
        return this.x * teine.x + this.y + teine.y;
    };
    return Vektor;
}());
//Loo massiiv neljast vektorist
//Leia nende kõigi summa
var vektorid = [
    new Vektor(1, 3),
    new Vektor(1, 5),
    new Vektor(3, 3),
    new Vektor(2, 1),
];
var asukoht = vektorid[0];
console.log(asukoht);
for (var i = 1; i < vektorid.length; i++) {
    asukoht = asukoht.liida(vektorid[i]);
}
asukoht.kuva();
/*let v1:Vektor = new Vektor(3, 5);
v1.kuva();
console.log(v1.pikkus());
let v3:Vektor = v1.liida(new Vektor(1, 2));
v3.kuva();
let v4:Vektor = v1.korruta(2);
v4.kuva();
v1.korruta(4).kuva(); //saab ka nii kuvada

let vagun:Vektor= new Vektor(9, -4);
let energia:number=v1.skalaarKorrutis(vagun);
console.log(energia);
*/
