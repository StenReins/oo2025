class pangaKonto {
    isik;
    summa;
    constructor(isik, summa) {
        this.isik = isik;
        this.summa = summa;
    }
    static kasutajad = [];
    static kõikKasutajad() {
        console.log(pangaKonto.kasutajad);
    }
    looKasutaja(isikuNimi) {
        let uusKonto = new pangaKonto(isikuNimi, 0.00);
        pangaKonto.kasutajad.push(uusKonto);
        console.log("Loodud konto: " + uusKonto.isik);
    }
    väljavõte(isikuNimi) {
        const konto = pangaKonto.kasutajad.find(konto => konto.isik === isikuNimi);
        if (konto) {
            console.log(konto.isik + ": " + konto.summa + " eurot");
        }
        else {
            console.log("Kasutajat ei leitud :(");
        }
    }
    rahaSisse(isikuNimi, arv) {
        const konto = pangaKonto.kasutajad.find(konto => konto.isik === isikuNimi);
        if (konto) {
            konto.summa += arv;
        }
        console.log("Kontole " + isikuNimi + " lisati " + arv + " eurot");
    }
    rahaVälja(isikuNimi, arv) {
        const konto = pangaKonto.kasutajad.find(konto => konto.isik === isikuNimi);
        if (konto) {
            konto.summa -= arv;
        }
        console.log("Kontolt " + isikuNimi + " võeti " + arv + " eurot");
    }
}
const konto = new pangaKonto("kasutaja", 0.0);
konto.looKasutaja("Timmu");
//konto.looKasutaja("Mimmu");
konto.väljavõte("Timmu");
konto.väljavõte("Mimmu");
pangaKonto.kõikKasutajad();
konto.rahaSisse("Timmu", 20);
konto.väljavõte("Timmu");
konto.rahaVälja("Timmu", 20);
konto.väljavõte("Timmu");
