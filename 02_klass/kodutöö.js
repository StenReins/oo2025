var pangaKonto = /** @class */ (function () {
    function pangaKonto(isik, summa) {
        this.isik = isik;
        this.summa = summa;
    }
    pangaKonto.kõikKasutajad = function () {
        console.log(pangaKonto.kasutajad);
    };
    pangaKonto.prototype.looKasutaja = function (isikuNimi) {
        var uusKonto = new pangaKonto(isikuNimi, 0.00);
        pangaKonto.kasutajad.push(uusKonto);
        console.log("Loodud konto: " + uusKonto.isik);
    };
    pangaKonto.prototype.väljaVõte = function (isikuNimi) {
        var konto = pangaKonto.kasutajad.find(function (konto) { return konto.isik === isikuNimi; });
        if (konto) {
            console.log(konto.isik + ": " + konto.summa + " eurot");
        }
        else {
            console.log("Kasutajat ei leitud :(");
        }
    };
    pangaKonto.prototype.rahaSisse = function (isikuNimi, arv) {
        var konto = pangaKonto.kasutajad.find(function (konto) { return konto.isik === isikuNimi; });
        if (konto) {
            konto.summa += arv;
        }
        console.log("Kontole " + isikuNimi + " lisati " + arv + " eurot");
    };
    pangaKonto.prototype.rahaVälja = function (isikuNimi, arv) {
        var konto = pangaKonto.kasutajad.find(function (konto) { return konto.isik === isikuNimi; });
        if (konto) {
            konto.summa -= arv;
        }
        console.log("Kontolt " + isikuNimi + " võeti " + arv + " eurot");
    };
    pangaKonto.kasutajad = [];
    return pangaKonto;
}());
var konto = new pangaKonto("kasutaja", 0.0);
konto.looKasutaja("Timmu");
//konto.looKasutaja("Mimmu");
konto.väljaVõte("Timmu");
konto.väljaVõte("Mimmu");
pangaKonto.kõikKasutajad();
konto.rahaSisse("Timmu", 20);
konto.väljaVõte("Timmu");
konto.rahaVälja("Timmu", 20);
konto.väljaVõte("Timmu");
