// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

const ciao = require("./names.js")
const prova = require("./hobbies.js")
const hobbies = require("./hobbies.js")

function personInfo() {
    const name = fullName("Mario", "Rossi")
    const myHobbies = hobbies("calcio", "basket", "arrampiacata")

    return {
        fullName: name,
        hobbies: myHobbies
    }
}

console.log(personInfo());