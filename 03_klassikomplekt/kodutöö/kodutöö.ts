let tasks:string[] = [];
let result:string = "";
let countTask:number = 0;

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
    countTask += 1
    result += "<li class='progress" + countTask + "'>" + task.eesnimi + " | " + task.ülesanne + " | " + task.kirjeldus + " | " + task.kategooria + "</li>" + "<label for='progress'>Tehtud!</label><input type='checkbox' class='progress" + countTask + "' unchecked onclick='cleanTask(" + countTask + ")'><br><br>"
    entries!.innerHTML = result;
}

/*function cleanTask(taskId:number) {
    const taskElement = document.getElementById('task' + taskId);
    const progressElement = document.getElementById('progress' + taskId);
    if (taskElement) {
        taskElement.remove(); 
        progressElement?.remove();
    }
}*/

function cleanTask(id: number): void {
    const taskElement = document.querySelector('.progress' + id)
    if (taskElement) {
        taskElement.remove(); 
    }
}