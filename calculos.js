let toInt = (numero) => {
    return parseInt(numero, 10);
}

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
let borrarareatrapecio = () => {
    const base_menor = document.getElementById('base_menor')
    const base_mayor = document.getElementById('base_mayor')
    const altura_trapecio = document.getElementById('altura_trapecio')
    const resultadoareatrapecio = document.getElementById('resultadoareatrapecio')
    resultadoareatrapecio.value = 0;
    base_mayor.value = 0;
    base_menor.value = 0;
    altura_trapecio.value = 0;
}
let calcularareatrapecio = () => {
    const base_menor = document.getElementById('base_menor')
    const base_mayor = document.getElementById('base_mayor')
    const altura_trapecio = document.getElementById('altura_trapecio')
    const resultadoareatrapecio = document.getElementById('resultadoareatrapecio')
    resultadoareatrapecio.value = toInt(altura_trapecio.value) * ((toInt(base_mayor.value) + toInt(base_menor.value)) / 2)
}
let borrarareacirculo = () => {
    const radio_circulo = document.getElementById('radio_circulo')
    const resultadoareacirculo = document.getElementById('resultadoareacirculo')
    resultadoareacirculo.value = 0;
    radio_circulo.value = 0;
}
let calcularareacirculo = () => {
    const radio_circulo = document.getElementById('radio_circulo')
    const resultadoareacirculo = document.getElementById('resultadoareacirculo')
    resultadoareacirculo.value = (3.14 * (radio_circulo.value * radio_circulo.value))
}
let borrarareapoligono = () => {
    const l_lado = document.getElementById('l_lados')
    const apotema_p = document.getElementById('apotema_p')
    const n_lados = document.getElementById('n_lados')
    const resultadoareapoligono = document.getElementById('resultadoareapoligono')
    resultadoareapoligono.value = 0;
    l_lado.value = 0;
    apotema_p.value = 0;
    n_lados.value = 0;
}
let calcularareapoligono = () => {
    const l_lado = document.getElementById('l_lados')
    const apotema_p = document.getElementById('apotema_p')
    const n_lados = document.getElementById('n_lados')
    const resultadoareapoligono = document.getElementById('resultadoareapoligono')
    resultadoareapoligono.value = (n_lados.value*l_lado.value)*(apotema_p.value)/2
}
let borrararearombo = () => {
    const diagonal1 = document.getElementById('diagonal1')
    const diagonal2 = document.getElementById('diagonal2')
    const resultadoarearombo = document.getElementById('resultadoarearombo')
    resultadoarearombo.value = 0;
    diagonal1.value = 0;
    diagonal2.value = 0;
}
let calculararearombo = () => {
    const diagonal1 = document.getElementById('diagonal1')
    const diagonal2 = document.getElementById('diagonal2')
    const resultadoarearombo = document.getElementById('resultadoarearombo')
    resultadoarearombo.value = ((diagonal1.value * diagonal2.value) / 2)
}
let borrarvolcubo = () => {
    const l_cubo =document.getElementById('l_cubo')
    const resultadovolcubo =document.getElementById('resultadovolcubo')
    l_cubo.value = 0;
    resultadovolcubo.value = 0;
}
let calcularvolcubo = () => {
    const l_cubo =document.getElementById('l_cubo')
    const resultadovolcubo =document.getElementById('resultadovolcubo')
   resultadovolcubo.value = (l_cubo.value*l_cubo.value*l_cubo.value)
}
