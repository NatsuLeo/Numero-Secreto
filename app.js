let numerosecreto = 0; 
let intentos = 0;
let listaNumerosSorteados = []; 
let numeroMaximo = 100;
let juegosMaximos = 100;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numerosecreto){
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numerosecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == juegosMaximos){
        asignarTextoElemento('p', 'Ya jugaste el numero maximo de veces.')
    } else {
    //Si el numero generado esta incluido esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja(); 
    //Condiciones Iniciales
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales(){
    asignarTextoElemento('h1', '¡Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numerosecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();
