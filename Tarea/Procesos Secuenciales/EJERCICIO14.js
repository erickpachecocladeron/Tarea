//14. Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
// * Analisis de requerimentos:
// *los datos o variables del problema
// Entrada: nombres=""
// *Los calculos o procesos que se hacen con las variables
// Proceso: // Asignar valores a los elementos del arreglo
   // nombres[1] <- ""
   // nombres[2] <- ""
   // nombres[3] <- ""
   // nombres[4] <- ""
   // nombres[5] <- ""
   // Escribir "Los nombres son:"
   // Para i <- 1 Hasta 5
     //   Escribir nombres[i]
   // FinPara
// *La informacion de las variables procesadas 
// Salida: Escribir nombres[i]

//!Pseudocodigo

//Algoritmo intercambiar
    //Dimension arreglo[5]
	
    //arreglo[1] <- 5
    //arreglo[2] <- 10
    //arreglo[3] <- 15
    //arreglo[4] <- 20
    //arreglo[5] <- 25
	
    //Escribir "Arreglo antes del intercambio:"
   //Para i <- 1 Hasta 5
        //Escribir arreglo[i]
   // FinPara
	
    //Definir temp como entero
   // temp <- arreglo[1]
    //arreglo[1] <- arreglo[5]
    //arreglo[5] <- temp
	
    //Escribir "Arreglo después del intercambio:"
    //Para i <- 1 Hasta 5
        //Escribir arreglo[i]
   // FinPara
	
//FinAlgoritmo

const write = console.log

//JAVA SCRIPT

function ejercicio14(){
  let arreglo = [5];

arreglo[0] = 5;
arreglo[1] = 10;
arreglo[2] = 15;
arreglo[3] = 20;
arreglo[4] = 25;

write("Arreglo antes del intercambio:");
for (let i = 0; i < 5; i++) {
    write(arreglo[i]);
}

let temp = arreglo[0];
arreglo[0] = arreglo[4];
arreglo[4] = temp;

write("Arreglo después del intercambio:");
for (let i = 0; i < 5; i++) {
    write(arreglo[i]);
}

}
ejercicio14()
