// Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// Esporta la funzione dal file.

function fullName(firstName, lastName) {
    const obj = {
        firstName: firstName,
        lastName: lastName
    };
    return obj
}

//console.log(fullName("Tommaso", "Da Re"));

module.exports = fullName