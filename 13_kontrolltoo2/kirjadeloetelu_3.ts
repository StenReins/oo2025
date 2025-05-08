let ids:number[] = []
let texts:any[] = []

let canvas = document.querySelector('#canvas') as HTMLCanvasElement;
let ctx = canvas?.getContext("2d");

class Kiri {
    id:number = Math.floor(Math.random() * 100)
    constructor(public title:string, public text:string, public refs:number[]){
        this.title = title;
        this.text = text;
        texts.push(this.title, this.text, this.id, this.refs);
        this.addIdToList();
        this.addTextToCanvas();
    }

    addIdToList(){
        let references = document.querySelector('#refs');
        const option = document.createElement('option');
        option.value = String(this.id);
        option.textContent = String(this.id);
        references?.appendChild(option);
    }

    addTextToCanvas(){
        let rx = Math.floor(Math.random() * 900)
        let ry = Math.floor(Math.random() * 900)
        if(ctx){
        ctx.beginPath()
            ctx.fillStyle = "black";
            ctx.font = "20px serif"
            ctx.fillText(`${this.title} (Viited:${this.refs}): ${this.text}`, rx, ry);
        ctx.closePath()
        }
    }

    debug(){
        console.log(this.title, this.text, this.id, this.refs)
    }

    addRef(ref){
        for(let i = 0; i < ids.length; i++){
            if(ids[i] == ref){
                this.refs.push(ids[i]);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const submit = document.querySelector('#submit') as HTMLButtonElement;
    submit.addEventListener('click', () => {
        const title = (document.querySelector('#title') as HTMLInputElement).value;
        const text = (document.querySelector('#text') as HTMLTextAreaElement).value;
        const refsSelect = document.querySelector('#refs') as HTMLSelectElement;
        const selectedRefs = Array.from(refsSelect.selectedOptions).map(opt => Number(opt.value));
        new Kiri(title, text, selectedRefs);
    });
});