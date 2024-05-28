"use strict"

//Elementos capturados del HTML

const texto = document.getElementById("texto");
const buscar = document.getElementById("buscar");
const contar = document.getElementById("contar");
const salida = document.getElementById("salida");
const cargar = document.getElementById("cargar");
const vocales = document.getElementById("vocales");
const consonantes = document.getElementById("consonantes");
const palabras = document.getElementById("palabras");
const invertir = document.getElementById("invertir");
const palindromo = document.getElementById("palindromo");

//Eventos para los botones  

contar.addEventListener("click", function(){
    const textoValue = texto.value;
    const buscarValue = buscar.value;
    const count = contarPalabras(textoValue, buscarValue);
    salida.innerHTML = `La palabra "${buscarValue}" aparece ${count} veces.`;
});

cargar.addEventListener("click", cargarTexto);

vocales.addEventListener("click", function(){
    const textoValue = texto.value;
    const count = contarVocales(textoValue);
    salida.innerHTML = `Número de vocales: ${count}`;
});

consonantes.addEventListener("click", function(){
    const textoValue = texto.value;
    const count = contarConsonantes(textoValue);
    salida.innerHTML = `Número de consonantes: ${count}`;
});

palabras.addEventListener("click", function(){
    const textoValue = texto.value;
    const count = contarPalabrasTexto(textoValue);
    salida.innerHTML = `Número de palabras: ${count}`;
});

invertir.addEventListener("click", function(){
    const textoValue = texto.value;
    const textoInvertido = invertirTexto(textoValue);
    texto.value = textoInvertido;
});

palindromo.addEventListener("click", function(){
    const textoValue = texto.value;
    const esPalindromoValue = esPalindromo(textoValue);
    if (!esPalindromoValue) {
        salida.innerHTML = "No, no es un palíndromo";
        return;
    }
    salida.innerHTML = "Sí, es un palíndromo";
    
});



