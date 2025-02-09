//Ruutvõrrandi lahendamise funktsioon

function quadraticEquation(a:number, b:number, c:number){
    let lahendus1:number = (-b+Math.sqrt((b*b-4*a*c)))/(2*a)
    let lahendus2:number = (-b-Math.sqrt((b*b-4*a*c)))/(2*a)

    if(isNaN(lahendus1)){
        console.log("Esimesel x-il pole lahendust");
    }
    if(isNaN(lahendus2)){
        console.log("Teisel x-il pole lahendust");
    }
    if(lahendus1 == lahendus2){
        console.log("X on " + lahendus1);
    }
    else if(!isNaN(lahendus1) || !isNaN(lahendus2)){
            console.log("Esimene x:" + lahendus1);
            console.log("Teine x: " + lahendus2);
        }
}

//TESTIMISEKS
console.log("TEHE KAHE LAHENDUSEGA");
quadraticEquation(2, 5, -3);

console.log("TEHE ILMA LAHENDUSETA");
quadraticEquation(2, 3, 5);

console.log("TEHE ÜHE LAHENDUSEGA");
quadraticEquation(1, -4, 4);