//Ruutvõrrandi lahendamise funktsioon
function quadraticEquation(a, b, c) {
    //let diskriminant:number = b*b - 4*a*c
    var lahendus1 = (-b + Math.sqrt((b * b - 4 * a * c))) / (2 * a);
    var lahendus2 = (-b - Math.sqrt((b * b - 4 * a * c))) / (2 * a);
    if (isNaN(lahendus1) || isNaN(lahendus2)) {
        console.log("Lahendus puudub");
    }
    if (lahendus1 == lahendus2) {
        console.log("x on " + lahendus1);
    }
    else if (!isNaN(lahendus1) && !isNaN(lahendus2)) {
        console.log("Esimene x:" + lahendus1);
        console.log("Teine x: " + lahendus2);
    }
    /* if (diskriminant>0){
         console.log("x1: " + lahendus1 + ", x2: " + lahendus2)
     }
 
     else if(diskriminant==0){
         lahendus1 = lahendus2 = -b/(2*a);
         console.log("X on " + lahendus1);
     }
     else{
         console.log("Ruutfunktsioonil pole lahendust")
     }*/
}
//TESTIMISEKS
console.log("TEHE KAHE LAHENDUSEGA");
quadraticEquation(2, 5, -3);
console.log("TEHE ILMA LAHENDUSETA");
quadraticEquation(2, 3, 5);
console.log("TEHE ÜHE LAHENDUSEGA");
quadraticEquation(1, -4, 4);
