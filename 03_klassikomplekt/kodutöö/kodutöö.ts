let tasks:string[] = [];
let result:string = "";

function submitEntry(): void {
    const eesnimi = <HTMLInputElement>document.getElementById('eesNimi');
    const ülesanne = <HTMLInputElement>document.getElementById('ülesanne');
    const kirjeldus = <HTMLInputElement>document.getElementById('ülesandeKirjeldus');
    const kategooria = <HTMLSelectElement>document.getElementById('kategooria');

    const task = {
        eesnimi: eesnimi.value,
        ülesanne: ülesanne.value,
        kirjeldus: kirjeldus.value,
        kategooria: kategooria.value
    };

    addTaskToList(task);
}

function addTaskToList(task): void {
    const entries = document.getElementById('entries');
    console.log(task);
    result += "<li>" + task.eesnimi + " | " + task.ülesanne + " | " + task.kirjeldus + " | " + task.kategooria + "</li>" + "<label for='progress'>Tehtud!</label><input type='checkbox' id='progress' onclick='cleanTask()'><br><br>"
    entries!.innerHTML = result;
}

function cleanTask(){
    
}