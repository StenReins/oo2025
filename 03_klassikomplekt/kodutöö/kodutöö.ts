class Ülesanne{
    constructor(protected eesnimi:string, protected ülesanne:string, protected ülesandekirjeldus:string, protected kategooria:string){}

    ülesanded:Ülesanne[] = []
    submitEntry(){
        const eesnimi = document.querySelector('#eesNimi');
        const ülesanne = document.querySelector('#ülesanne');
        const ülesandekirjeldus = document.querySelector('#ülesandeKirjeldus');
        const kategooria = document.querySelector('#kategooria');

        const newEntry = new Ülesanne(
            
        );
        this.ülesanded.push(newEntry)
        
    }
}