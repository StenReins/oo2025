function kehaMassiIndeks(cm:number, kg:number):number{
    let m:number = cm/100;
    return kg/(m*m);
}

//console.log(kehaMassiIndeks(181, 110));

let massid:number[]=[75, 78, 80, 81]

/*for(let mass of massid){ // of -> käib array läbi
    console.log(kehaMassiIndeks(173, mass));
}*/

let indeksid:number[]=massid.map(mass => kehaMassiIndeks(173, mass)); //funktsioon, millega võimalik ka leida indeksid
console.log("Esimese valemiga:");
console.log(indeksid);

//Looge teine valem kehamassiindeksi arvutamiseks:
//1.3 * kehakaal / pikkus ** 2.5
//aitab käsklus Math.pow
//Arvutage kehamassiindeks mitmesuguste massidega sama pikkuse juures,
//näidake, kuidas väärtused erinevad



function kehaMassiIndeks2(cm:number, kg:number):number{
    let m:number = cm/100
    return 1.3 * kg / Math.pow(m, 2.5);
}

let indeksid2:number[]=massid.map(mass => kehaMassiIndeks2(173, mass));
console.log("Teise valemiga");
console.log(indeksid2);

//arvutage mõlema valemiga sama massi ja eri pikkuste juures

let pikkused:number[][]=[];
for (let pikkus=150; pikkus<190; pikkus+=2){
    pikkused.push([pikkus, kehaMassiIndeks(pikkus, 90), kehaMassiIndeks2(pikkus, 90)]);
}
console.log(pikkused);