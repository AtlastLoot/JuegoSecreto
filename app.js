//declaro variables
let numeroSecreto = 0;
let numerosPermitidos = 10;
let intentos = 0;
let listaNumeroSorteados = [];

//funcion para asignar textos
function asignarTexto(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
//funcion para verificar si tu numero es igual al numero secreto
function verificarIntento(){
    //variable que lee tu numero del html
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value) ;
    
    // condicion para validar
    if(numeroDeUsuario === numeroSecreto){
        asignarTexto('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? "vez" : "veces"} `);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else{
        limpiarCaja();
        if (numeroDeUsuario > numeroSecreto){
            asignarTexto('p','El numero secreto es menor');
        }else{
            asignarTexto('p','El numero secreto es mayor');
        }
    }
    
    //contador del numero de intentos
    intentos++;
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = "";
    // o tambie:
    //document.querySelector('#valorUsuario').value = "";
    

}
function reinicioJuego(){
    limpiarCaja();
    document.querySelector('#reiniciar').setAttribute('disabled','true'); //query para seleccionar y agregar, get elemento id para obtener y quitar
    condicionesIniciales();
    //document.getElementById("reiniciar").atr;
}
//funcion que genera el numero secreto
function generarNumeroSecreto(){
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numerosPermitidos)+1;
    //si el numero generado esta en la lita
    if(listaNumeroSorteados.length == numerosPermitidos){
        asignarTexto('p','Ya se sortearon todo los numero permitidos');
        listaNumeroSorteados = [];

    }else{
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

    if(listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        
    }else{
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    /*if (listaNumeroSorteados.length === numerosPermitidos){
        listaNumeroSorteados = [];

    }*/

   console.log(listaNumeroSorteados.length);
}

function condicionesIniciales(){
    asignarTexto('h1','Juego del Numero Secreto');
    asignarTexto('p',`Ingrese un numero del 1 al ${numerosPermitidos}`);
    intentos = 1;
    //numeroSecreto=generarNumeroSecreto();
    numeroSecreto = generarNumeroSecreto();
    
}
//llamado de la funcion para asignar texto

condicionesIniciales();
