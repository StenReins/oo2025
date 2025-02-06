
class Vektor{
    constructor(protected x:number, protected y:number){}
    kuva():void{
        console.log(this.x, this.y);
    }
    pikkus():number{
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    liida(teine:Vektor):Vektor{
        return new Vektor(this.x + teine.x, this.y + teine.y);
    }
    //Loo käsklus vektori korrutamiseks arvuga
    korruta(arv:number):Vektor{
        return new Vektor(this.x * arv, this.y * arv);
    }
    //Suurenda X-i väärtust
    suurendaX():void{
        this.x+=1;
    }
    //Kahe vektori skalaarkorrutis
    skalaarKorrutis(teine:Vektor){
        return this.x*teine.x + this.y+teine.y
    }
}

//Loo massiiv neljast vektorist
//Leia nende kõigi summa

let vektorid:Vektor[]=[
    new Vektor(1,3),
    new Vektor(1,5),
    new Vektor(3,3),
    new Vektor(2,1),
]; // vektorite array
let asukoht = vektorid[0] //esimene vektor
console.log(asukoht)
for(let i=1; i<vektorid.length; i++){
    asukoht=asukoht.liida(vektorid[i]);     //esimesele vektorile liidetakse teine vektor juurde, tulemusele lisandub järgmine vektor.
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
