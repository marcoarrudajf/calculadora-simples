function calcNum(numero) {
  if (typeof inputVisor == "undefined") {
    document.calcform.visor.value = "";
  }
  document.calcform.visor.value = document.calcform.visor.value + numero;
  inputVisor = true;
  console.log(inputVisor);
}
function calcLimpo(){
     document.calcform.visor.value = '';
    }
    function calcLigar(on){
        document.calcform.visor.value = on;     
}
function calcMemo(
    memo){
        if(memo == 'memomais'){
            document.calcform.visor.value = 'M+cd . ';
        }else if(memo == 'memomenos'){
            document.calcform.visor.value = 'M- ';
    }
}

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

function calcValor(oper){
   var valor = document.calcform.visor.value;
   delete inputVisor;

   if (typeof inputOper != 'undefined' && oper == 'resultado') {
      inputValor = calcOper(inputOper, inputValor, valor);
      document.calcform.visor.value = inputValor;
      delete oper;
      delete inputValor;
      return(0);
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