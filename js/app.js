// Variables

let resultado =[];
// let valor 
// let valor2 
// let opr

const pantalla = document.querySelector('#pantalla');
const teclado = document.querySelector('#teclado');

// Eventos

cargarEventos();
function cargarEventos() {
    teclado.addEventListener('click', clickTeclado); 
}

// Funciones

function clickTeclado(e) {
    if (parseInt(e.target.id) || e.target.id === '0'){
        limpiarHTML();
        istCifra(e);
    } else if (e.target.classList.contains('operador')) {
        oprMat(e);
        limpiarHTML();
        borrar();
        resultado = []; 
    }
    if (e.target.classList.contains('opr-igual')) {  
        total();
        resultado = [];
        borrar();
    }
    if (e.target.classList.contains('flecha')) {
        retroceder();
        console.log('tecla retroceder');
    }
    if (e.target.classList.contains('borrar')) {
        limpiarHTML();
        borrar();
        resultado = [];
    }
}
function istCifra(e) {
    let num = e.target.id;
    resultado = [...resultado, num];
    num = parseInt(resultado.join(''));

    let cifra = document.createElement('div');
    cifra.id = ('cifra')
    cifra.textContent = num;
    
    limpiarHTML()
    pantalla.appendChild(cifra)
}

function oprMat(e) {
    opr = e.target.id
    valor =  cifra.textContent;
}
function total() {
    valor2 = cifra.textContent
    if (opr === "dividir") {
        rsd = valor/valor2; 
    }
    if (opr === "multiplicar") {
        rsd = valor*valor2; 
    }
    if (opr === "restar") {
        rsd = valor-valor2; 
    }
    if (opr === "sumar") {
        rsd = parseInt(valor)+parseInt(valor2); 
    }
    let total = document.createElement('div');
    total.id = ('total')
    total.textContent = rsd;

    limpiarHTML();
    pantalla.appendChild(total);
}
function retroceder() {
    
}

function borrar() {
    let c = document.createElement('div')
    c.textContent = 0;
    pantalla.appendChild(c);
}

function limpiarHTML() {   
    while (pantalla.firstChild) {
        pantalla.removeChild(pantalla.firstChild)
    }
}


// if (e.target.classList.contains('operador')) {        
//     oprMat(e);
//     limpiarHTML();
//     borrar();
//     resultado = []; 
// } else if (parseInt(e.target.id) || e.target.id === '0') {
//     limpiarHTML();
//     istCifra(e);
// }