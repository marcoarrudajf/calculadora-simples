//Esta função coloca o numero no visor
function calcNum(numero) {
    if (typeof inputVisor == "undefined") {
        document.calcform.visor.value = "";
    }
    document.calcform.visor.value = document.calcform.visor.value + numero;
    inputVisor = true;
}

// este qua clicado o botão AC limpa a calculadora
function calcLimpo() {
    document.calcform.visor.value = '';
}

// Liga a calculadora colocando o valor como zero no visor
function calcLigar(on) {
    document.calcform.visor.value = on;
}

// memoriza os valores no visor, esta função ainda precisa ser  mais elaborada
function calcMemo(
    memo) {
    if (memo == 'memomais') {
        document.calcform.visor.value = 'M+cd . ';
    } else if (memo == 'memomenos') {
        document.calcform.visor.value = 'M- ';
    }
}

//Faz as operações que forem pedidas pelo usuário
function calcOper(oper, valor1, valor2) {
    if (oper == "somar") {
        var valor = parseFloat(valor1) + parseFloat(valor2);
    } else if (oper == "subtrair") {
        valor = valor1 - valor2;
    } else if (oper == "multiplicar") {
        valor = valor1 * valor2;
    } else {
        valor = valor1 / valor2;
    }
    return valor;
}

//Pega as operações e retorna seus respectivos valores e resultados no 
//visor verificando todas a s tarfeas executadas
function calcValor(oper) {
    var valor = document.calcform.visor.value;
    delete inputVisor;

    if (typeof inputOper != 'undefined' && oper == 'resultado') {
        inputValor = calcOper(inputOper, inputValor, valor);
        document.calcform.visor.value = inputValor;
        delete oper;
        delete inputValor;
        return (0);
    }

    if (typeof inputValor != 'undefined') {
        inputValor = calcOper(inputOper, inputValor, valor);
        inputOper = oper;
        document.calcform.visor.value = inputValor;
    } else {
        inputValor = valor;
        inputOper = oper;
    }
}