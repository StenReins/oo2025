class pangaKonto{
    constructor(public isik:string, public summa:number){}
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

}

const konto = new pangaKonto("kasutaja", 0.0);
konto.looKasutaja("Timmu");
konto.väljaVõte("Timmu");
konto.väljaVõte("Mimmu");
pangaKonto.kõikKasutajad();