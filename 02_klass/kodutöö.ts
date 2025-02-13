class pangaKonto{
    constructor(protected isik:string, protected summa:number){}
    static kasutajad: pangaKonto[] = [];

    static kõikKasutajad(){
        console.log(pangaKonto.kasutajad);
    }

    looKasutaja(isikuNimi:string): void{
        let uusKonto = new pangaKonto(isikuNimi, 0.00);
        pangaKonto.kasutajad.push(uusKonto);
        console.log("Loodud konto: " + uusKonto.isik);
    }

    väljaVõte(isikuNimi:string): void{
        const konto = pangaKonto.kasutajad.find(konto => konto.isik === isikuNimi);
        if(konto){
            console.log(konto.isik + ": " + konto.summa + " eurot");
        }
        else{
            console.log("Kasutajat ei leitud :(");
        }
    }

    rahaSisse(isikuNimi:string, arv:number){
        const konto = pangaKonto.kasutajad.find(konto => konto.isik === isikuNimi)
        if(konto){
            konto.summa += arv
        }
        console.log("Kontole " + isikuNimi + " lisati " + arv + " eurot")
    }

    rahaVälja(isikuNimi:string, arv:number){
        const konto = pangaKonto.kasutajad.find(konto => konto.isik === isikuNimi)
        if(konto){
            konto.summa -= arv
        }
        console.log("Kontolt " + isikuNimi + " võeti " + arv + " eurot")
    }

}

const konto = new pangaKonto("kasutaja", 0.0);

konto.looKasutaja("Timmu");
//konto.looKasutaja("Mimmu");

konto.väljaVõte("Timmu");
konto.väljaVõte("Mimmu");

pangaKonto.kõikKasutajad();

konto.rahaSisse("Timmu", 20);
konto.väljaVõte("Timmu");

konto.rahaVälja("Timmu", 20);
konto.väljaVõte("Timmu");

