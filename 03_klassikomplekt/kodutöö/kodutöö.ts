class Entry{
    constructor(protected eesnimi:string, protected ülesanne:string, protected kirjeldus:string, protected kategooria:string, protected done:boolean ){
        this.eesnimi = eesnimi;
        this.ülesanne = ülesanne;
        this.kirjeldus = kirjeldus;
        this.kategooria = kategooria;
        this.done = false
    }
}

class Todo{
    constructor(){
        this.entries = JSON.parse(localStorage.getItem('entries')) || [];
        document.querySelector('#addButton').addEventListener('click', () => {this.addEntry()});
        this.render();
    }

    addEntry(){
        const nameValue = <HTMLInputElement>document.querySelector('#eesNimi').value
        const taskValue = <HTMLInputElement>document.querySelector('#ülesanne').value
        const descriptionValue = <HTMLInputElement>document.querySelector('#ülesandeKirjeldus').value
        const categoryValue = <HTMLSelectElement>document.querySelector('kategooria').value
        
        this.entries.push(new Entry(nameValue, taskValue, descriptionValue, categoryValue));
        this.save();
    }

    render(){
        let  tasklist = document.querySelector('#taskList');
        if(document.querySelector('.todo-list')){
            document.querySelector('#taskList').removeChild(document.querySelector('.todo-list'));
        }

        const ul = document.createElement('ul');
        ul.className = "todo-list";

        this.entries.forEach((entryValue, entryIndex) => {
            const li = document.createElement('li');
            const div = document.createElement('div');
            const deleteButton = document.createElement('button');
            deleteButton.innerText = "x";
            deleteButton.addEventListener('click', () => {
                this.entries.splice(entryIndex, 1);
                this.save();
            });
            //div.innerHTML = entryValue.title + " " +  entryValue.description + " " + entryValue.date ;
            div.innerHTML = `<div>${entryIndex + 1}.</div><div>${entryValue.eesnimi}</div><div>${entryValue.ülesanne}</div><div>${entryValue.kirjeldus}</div><div>${entryValue.kategooria}</div>`;

            ul.appendChild(li);
            li.appendChild(div);
            li.appendChild(deleteButton);
        });

        tasklist.appendChild(ul);
    }

    save(){
        localStorage.setItem('entries', JSON.stringify(this.entries));
        this.render();
    }
}