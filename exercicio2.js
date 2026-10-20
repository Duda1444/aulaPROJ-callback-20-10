function CalcularDobro(numero, callbackResultado) {
    const ValorDobrado = numero*2
    callbackResultado(ValorDobrado)
}
function imprimirFormato(valor){
    console.log("O resultado é: " + valor);
}

CalcularDobro(25, imprimirFormato);