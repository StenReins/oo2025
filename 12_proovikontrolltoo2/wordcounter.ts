interface LetterCounter {
    countLetter(input:string): number;

}

export abstract class Text implements LetterCounter{
    abstract getContent():string

    countLetter(input:string): number{
        let count = 0;
        for(let letter of this.getContent()){
            if(letter == input){
                count++
            }
        }
        return count;
    }
}

export class Word extends Text {
    constructor(private word){
        super();
    }

    getContent(): string{
        return this.word;
    }
}

export class Sentence extends Text {
    words:Word[] = [];
    constructor(sentence: string){
        super();
        const wordObjects: {[word:string] :Word} = {};

        this.words=sentence.split(' ').map(w=> {
            if(!wordObjects[w]){
                wordObjects[w]=new Word(w)
            }
            return wordObjects[w];
        });
    }

    getContent(): string{
        return this.words.map(word => word.getContent()).join("");
    }

    countLetter(letter:string): number{
        return this.words.reduce((sum, word) => sum + word.countLetter(letter), 0);
    }
}



let test = new Sentence("aias sadas saia");
console.log(test.countLetter("a"))
