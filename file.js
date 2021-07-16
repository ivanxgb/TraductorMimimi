const mimimiFunction = () => {

    let input = document.getElementById('inputText');
    let output = document.getElementById('outputText');
    output.innerHTML = eliminarVocales(input.value);
}

const eliminarVocales = (texto) => texto.replace(/[aáAÁeéEÉíIÍoOóÓuúUÚ]/g, 'i');
