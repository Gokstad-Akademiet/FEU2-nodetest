const fs = require('fs')

fs.readFile('./data.txt', 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
})

// Tips:
// fs.readFile: Lese fra en fil
// fs.writeFile: Skrive til en fil
// fs.exists: Sjekke om en fil eksisterer
// fs.mkdir: Opprette en mappe
// fs.unlink: Slette en fil
// fs.rename: Endre navn på fil
// ...
// https://nodejs.org/api/fs.html 



// Oppgave:
// Les denne artikkelen og forsøk å kopiere eksempelet:
// https://www.geeksforgeeks.org/node-js-fs-writefile-method/
