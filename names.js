// Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// Esporta la funzione dal file.

function twoNames(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    };
}

console.log(twoNames("Tommaso", "Filippo"));

module.exports = twoNames()