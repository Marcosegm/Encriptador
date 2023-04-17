// Condición para el encriptador 
// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter" 
// La letra "i" es convertida para "imes" 
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar(){
    var texto = document.getElementById("ingresarTex").value.toLowerCase(); // Se extrae el texto ingresado por el usuario, y se convierte el texto en minúscula"
    // El parámetro "i" afecta tanto mayúsculas como minúsculas 
    // El parámetro "g" afecta toda la línea u oración
    // El parámetro "m" afecta a multiples líneas
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("textoCuadro1").style.display = "none";
    document.getElementById("textoCuadro2").style.display = "none";
    document.getElementById("CuadroDeTextoResultado").innerHTML = txtCifrado;
    document.getElementById("botCopiar").style.display = "show";
    document.getElementById("botCopiar").style.display = "inherit";
    document.getElementById("CuadroDeTextoResultado").style.display = "show";
    document.getElementById("CuadroDeTextoResultado").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("ingresarTex").value.toLowerCase(); // Se extrae el texto ingresado por el usuario, y se convierte el texto en minúscula"
    // El parámetro "i" afecta tanto mayúsculas como minúsculas 
    // El parámetro "g" afecta toda la línea u oración
    // El parámetro "m" afecta a multiples líneas
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("textoCuadro1").style.display = "none";
    document.getElementById("textoCuadro2").style.display = "none";
    document.getElementById("CuadroDeTextoResultado").innerHTML = txtCifrado;
    document.getElementById("botCopiar").style.display = "show";
    document.getElementById("botCopiar").style.display = "inherit";
    document.getElementById("CuadroDeTextoResultado").style.display = "show";
    document.getElementById("CuadroDeTextoResultado").style.display = "inherit";
    
}

function copiar() {
    var contenido = document.querySelector("#CuadroDeTextoResultado");
    contenido.select();
    document.execCommand("copy");
}
