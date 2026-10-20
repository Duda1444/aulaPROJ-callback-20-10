function operar(a, b, operacaoCallback){
    return operacaoCallback(a, b);
}

function somar(x, y){
    const somado = x + y;
    return somado; 
} 

function multiplicar(x, y){
    const multiplicado = x * y;
    return multiplicado;
}
console.log("O resultado da soma é: " + operar(10, 4, somar));
console.log("O resultado da multiplicação é: " + operar(10, 4, multiplicar));