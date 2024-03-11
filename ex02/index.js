const sequenciaFibonacci = (numero) => {
    let anterior = 0;
    let atual = 1;
    let proximo;

    while (atual <= numero) {
        if (atual === numero) {
            return true;
        }
        proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    return false;
}

const numeroInformado = 21; 

if (sequenciaFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}
