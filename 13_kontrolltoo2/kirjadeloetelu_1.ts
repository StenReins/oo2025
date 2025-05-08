let db:string[] = []

class Kiri {
    constructor(protected title, protected text){
        this.title = title;
        this.text = text;
    }
    addText() {
        db.push(this.title, this.text);
    }
}

let testing = new Kiri("Test", "Aias sadas saia")
let testing2 = new Kiri("test2", "aaaaaa");
testing.addText();
testing2.addText();
console.log(db);