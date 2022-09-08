let operandoa = prompt("ingrese un Numero")
let operandob = prompt("ingrese un Numero")
let operacion = prompt("ingrese que operacion desea realizar, +, -, *, /")

function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        alert("EL resultado de tu operacion es " + res)
        break;
  
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          alert("EL resultado de tu operacion es " + res)
          break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        alert("EL resultado de tu operacion es " + res)
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        alert("EL resultado de tu operacion es " + res)
        break;
    }
    
  }