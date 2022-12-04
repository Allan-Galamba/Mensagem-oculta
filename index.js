var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");



function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/a/g, "d").replace(/b/g, "e").replace(/c/g, "f").replace(/d/g, "g").replace(/e/g, "h").replace(/f/g, "d").replace(/g/g, "e").replace(/h/g, "f").replace(/i/g, "g").replace(/j/g, "h").replace(/k/g, "d").replace(/l/g, "e").replace(/m/g, "f").replace(/n/g, "g").replace(/o/g, "h").replace(/p/g, "d").replace(/q/g, "e").replace(/r/g, "f").replace(/s/g, "g").replace(/t/g, "h").replace(/u/g, "d").replace(/v/g, "e").replace(/w/g, "f").replace(/x/g, "g").replace(/y/g, "h").replace(/z/g,"j")
  
  
  
  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

  

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto =  texto.replace(/a/g, "n").replace(/b/g, "b").replace(/f/g, "c").replace(/g/g, "d")
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}
