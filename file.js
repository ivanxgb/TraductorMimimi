let input = document.getElementById('inputText');
let output = document.getElementById('outputText');

const eliminarVocales = (texto) => texto.replace(/[aáAÁeéEÉíIÍoOóÓuúUÚ]/g, 'i');
const say = (text = "Ingresa un texto") => speechSynthesis.speak(new SpeechSynthesisUtterance(text));

function mimimiFunction() {
    output.innerHTML = eliminarVocales(input.value);
}

function talk() {
    say(eliminarVocales(input.value));
}