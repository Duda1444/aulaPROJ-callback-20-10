function processarTexto(texto,  callbackModificadora){
    callbackModificadora(texto);
}

processarTexto("Senai Valinhos", (t) => console.log(t.toUpperCase()));