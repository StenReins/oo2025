var tasks = [];
var result = "";
var countTask = 0;
function submitEntry() {
    var eesnimi = document.getElementById('eesNimi');
    var ülesanne = document.getElementById('ülesanne');
    var kirjeldus = document.getElementById('ülesandeKirjeldus');
    var kategooria = document.getElementById('kategooria');
    var task = {
        eesnimi: eesnimi.value,
        ülesanne: ülesanne.value,
        kirjeldus: kirjeldus.value,
        kategooria: kategooria.value
    };
    addTaskToList(task);
}
function addTaskToList(task) {
    var entries = document.getElementById('entries');
    console.log(task);
    countTask += 1;
    result += "<li class='progress" + countTask + "'>" + task.eesnimi + " | " + task.ülesanne + " | " + task.kirjeldus + " | " + task.kategooria + "</li>" + "<label for='progress'>Tehtud!</label><input type='checkbox' class='progress" + countTask + "' unchecked onclick='cleanTask(" + countTask + ")'><br><br>";
    entries.innerHTML = result;
}
/*function cleanTask(taskId:number) {
    const taskElement = document.getElementById('task' + taskId);
    const progressElement = document.getElementById('progress' + taskId);
    if (taskElement) {
        taskElement.remove();
        progressElement?.remove();
    }
}*/
function cleanTask(id) {
    var taskElement = document.querySelector('.progress' + id);
    if (taskElement) {
        taskElement.remove();
    }
}
