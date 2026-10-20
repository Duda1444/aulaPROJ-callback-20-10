function saudacao() {
    console.log("Olá! bem vindo ao back-end com Node.js!")
}

function executar (callback){
console.log("Iniciando processo...");
callback();
}
executar(saudacao);