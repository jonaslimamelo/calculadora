function Insert(number){
  let numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + number
}

function Clean() {
  document.getElementById('resultado').innerHTML = "";
}

function Back() {
  let res = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = res.substring(0, res.length -1)
}

function Calcular() {
  let resultado = document.getElementById('resultado').innerHTML;
  if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado)
  }
}