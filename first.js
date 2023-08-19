const persons = require('./data.json')

persons.forEach(person => {
    console.log(person.first_name, person.last_name)
});

// Oppgave:
// Lag en setning som tar med "gender" fra data.json
// Resultatet skal se slik ut:
// Mitt navn er Alexis Wetherald og jeg er en kvinne