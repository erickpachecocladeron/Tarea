//15. Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre si.
// Entrada:
// Proceso:
// Salida:

// Pseudocodigo:
// InicioAlgoritmo ejercicio_15
//  Dimension arreglo[5]
//  arreglo[1] < 7
//  arreglo[2] < 14
//  arreglo[3] < 21
//  arreglo[4] < 28
//  arreglo[5] < 35
//  Escribir "Arreglo antes del intercambio:"
//  Para i < 1 Hasta 5
//   Escribir arreglo[i]
// FinPara
// Definir temp como entero
// temp < arreglo[1]
// arreglo[1] < arreglo[5]
// arreglo[5] < temp
// Escribir "Arreglo despues del intercambo:"
// Para i < 1 Hasta 5
//   Escribir arreglo[i]
//  FinPara
// FinalAlgoritmo

const prompt = require('prompt-sync')();

function ejercicio_15() {
    const arreglo = new Array(5)
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = prompt("Inserte el numero " + (i+1) + ":")
    }
    console.log("Los numeros ingresados son:");
    for (let i = 0; 1 < arreglo.length; i++){
        console.log(arreglo[1])
    }
    let temp = arreglo[0]
    arreglo[0] = arreglo[arreglo.length-1]
    arreglo[arreglo.length-1] = temp
    console.log("Los numeros intercambios son:"); 
}

ejercicio_15();
