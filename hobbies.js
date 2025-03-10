// Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un array di stringhe contenenti gli hobby.
// Esporta la funzione dal file.

function myHobbies(hobbyOne, hobbyTwo, hobbyThree) {
    const hobbies = [`${hobbyOne}`, `${hobbyTwo}`, `${hobbyThree}`]
    return hobbies
}

// console.log(myHobbies("calcio", "basket", "nuoto"));

module.exports = myHobbies()