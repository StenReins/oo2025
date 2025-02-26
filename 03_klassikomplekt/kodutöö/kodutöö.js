var tasks = [];
var result = "";
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
    result += "<li>" + task.eesnimi + " | " + task.ülesanne + " | " + task.kirjeldus + " | " + task.kategooria + "</li>" + "<label for='progress'>Tehtud!</label><input type='checkbox' id='progress'><br><br>";
    entries.innerHTML = result;
}
