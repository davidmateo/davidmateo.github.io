let calcularAreaCuadrado = () => {
    const lado = document.getElementById('lado');
    const resultado = document.getElementById('resultadoAreaCuadrado')
    resultado.value = lado.value * lado.value;
}

let borrarAreaCuadrado = () => {
    const lado = document.getElementById('lado');
    const resultado = document.getElementById('resultadoAreaCuadrado')
    resultado.value = 0;
    lado.value = 0;
}
let borrarareatriangulo = () => {
    const base = document.getElementById('base')
    const altura = document.getElementById('altura')
    const resultadoareatriangulo = document.getElementById('resultadoareatriangulo')
    resultadoareatriangulo.value = 0;
    base.value = 0;
    altura.value = 0;
}
let calcularareatriangulo = () => {
    const base = document.getElementById('base');
    console.log(base.value)
    const altura = document.getElementById('altura');
    console.log(altura.value)
    const resultadoareatriangulo = document.getElementById('resultadoareatriangulo')
    resultadoareatriangulo.value = (base.value * altura.value / 2)
}

let borrarArearectangulo = () => {
    const lado = document.getElementById('lado_rectangulo')
    console.log(lado.value)
    const ancho = document.getElementById('ancho_rectangulo')
    console.log(ancho.value)
    const resultadoArearectangulo = document.getElementById('resultadoArearectangulo')
    resultadoArearectangulo.value = 0;
    lado.value = 0;
    ancho.value = 0;
}

let calcularArearectangulo = () => {
    const lado = document.getElementById('lado_rectangulo')
    const ancho = document.getElementById('ancho_rectangulo')
    const resultadoArearectangulo = document.getElementById('resultadoArearectangulo')
    resultadoArearectangulo.value = (lado.value * ancho.value)
}  
