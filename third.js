// OBS! Må muligens kjøres som administrator! 
// Windows: Høyreklikk på VSCode, åpne som administrator, åpne mappen med disse filene på nytt ?
// Mac: Skriv "sudo node......." og skriv inn passordet til maskinen din

const os = require('os')

os.setPriority(0, -20)

console.log(os.type(), os.platform(), os.arch())
console.log("CPUs", os.cpus().length)