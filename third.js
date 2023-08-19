// OBS! Må muligens kjøres som administrator! 
// Windows: Høyreklikk på VSCode, åpne som administrator, åpne mappen med disse filene på nytt ?
// Mac: Skriv "sudo node......." og skriv inn passordet til maskinen din

const os = require('os')

os.setPriority(0, -20)

console.log(os.type(), os.platform(), os.arch())
console.log("CPUs", os.cpus().length)


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
