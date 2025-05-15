export class TodoManager {
    entries: any[];
    ids: number[];
    constructor(protected name:string){
        this.name = name
        this.entries = []
        this.ids = []
    }


    add(text){
        let id = 0
        let entry = {
            id: id,
            name: this.name,
            text: text,
            tehtud: false
        }

        while(this.ids.includes(id)){
            id++;
        }

        this.entries.push(entry)
        this.ids.push(id)
        return 'Task lisatud';
    }

    remove(id){
        for(let i = 0; i < this.ids.length; i++){
            if(id == this.ids[i]){
                this.entries.splice(i, 1);
                this.ids.splice(i, 1);
                return 'Task kustutatud'
            }
        }
        return 'Taski ei leitud'
    }

    toggle(id){
        const entry = this.entries.find(e => e.id == id);
        if(entry){
            entry.tehtud = !entry.tehtud;
            return true;
        }
        return false;
    }

    getEntries(){
        return this.entries;
    }
}