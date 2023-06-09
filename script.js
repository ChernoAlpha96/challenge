var bEncriptar = document.querySelector("#btn-Encriptar");
var bDesencriptar = document.querySelector("#btn-Desencriptar");
var imagen = document.querySelector(".imagenseccion2");
var h4 = document.querySelector(".mensajenoEncontrado");
var parrafo = document.querySelector(".parrafoingresetexto");
var resultado = document.querySelector(".texto-Resultado");
var bCopiar = document.querySelector("#btn-Copiar");


bEncriptar.onclick = encriptar;
bDesencriptar.onclick = desencriptar;
bCopiar.onclick = copiar; 

function encriptar(){
    ocultarSeccion();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);
}

function desencriptar (){
    ocultarSeccion();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);
}

function recuperarTexto(){
    var textarea = document.querySelector(".text-area");
    return textarea.value;
}

function ocultarSeccion(){
    imagen.classList.add("ocultar");
    h4.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
        }
        return stringEncriptado;
}

function desencriptarTexto(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
        }
        return stringDesencriptado;
}

function copiar(){
    ocultarSeccion();
    var texto = document.querySelector(".texto-Resultado");
    texto.select();
    document.execCommand("copy");
}

var textarea = document.querySelector(".text-area");
textarea.addEventListener("input", function () {
    var textoValido = validarCaracteresEspeciales(this.value);
    this.value = textoValido;
});

function validarCaracteresEspeciales(texto) {
    var regex = /^[a-z\s]+$/;

    if (!regex.test(texto)) {
        alert("Se encontraron caracteres especiales. Por favor, ingrese solo letras minúsculas y espacios.");
    }
    return texto;
}


window.addEventListener('load', function() {
    var loader = document.querySelector('.loading');
    setTimeout(function() {
      loader.style.display = 'none';
    }, 2000);
  });

 

  // Obtener el checkbox y el elemento <body> desde el HTML
const checkbox = document.getElementById("check");
const body = document.body;

// Escuchar el evento de cambio del checkbox
checkbox.addEventListener("change", () => {
  // Alternar la clase "dark-mode" en <body> según el estado del checkbox
  if (checkbox.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});