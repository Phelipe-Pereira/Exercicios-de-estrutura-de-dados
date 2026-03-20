let initialArray = new Array(10);

function addInitialNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.random();
    }
}

function verifyNumberInList(array, selectNumber) {
    if (array.includes(selectNumber)) {
        console.log("Número localizado");
    } else {
        console.log("Número não consta na listagem");
    }
}

function removeNumber(array, selectedPosition) {
    let arrayPosition = selectedPosition - 1;

    if (arrayPosition >= 0 && arrayPosition < array.length) {
        array.splice(arrayPosition, 1);
        console.log("Número removido");
    } else {
        console.log("Posição inválida");
    }
}

addInitialNumbers(initialArray);
console.log(initialArray);

verifyNumberInList(initialArray, initialArray[0]);
removeNumber(initialArray, 1);

console.log(initialArray);
