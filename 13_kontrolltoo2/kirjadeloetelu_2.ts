let db:any[] = []

class Kiri {
    constructor(protected title:string, protected text:string){
        this.title = title;
        this.text = text;
    }

    kirjuta(){
        return [this.title, this.text];
    }
}

class Veebiuudis extends Kiri {
    constructor(protected title:string, protected text:string, protected url:string){
        super(title, text);
        this.url = url;
    }

    kirjuta(){
        return [this.title, this.text, this.url];
    }
}

export { Kiri, Veebiuudis }

//NÄITRAKENDUSE OSA

//üksikutena
let test1 = new Kiri("test 1", "aias sadas saia")
let test2 = new Veebiuudis("test 2", "aaaaaaa", "www.eesti.ee")

//kogumis
db.push(test1);
db.push(test2);

console.log(db)