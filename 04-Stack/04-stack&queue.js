const { Stack, Queue } = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras
 
// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA
//   Mar Azulado: raM odaluzA


function efectoEspejo(str){  
//tu codigo aqui

    
};



function turnos(queue){
// Un hospital necesita necesita aplicar un sistema de turnos. Para ello se implementara una Queue 
// en la cual iran ingresando los datos de cada paciente.

// paciente:{
//     nombre: "Daniel",
//     apellido: "Maers",
//     edad: 32,
//     estado: "en espera"
// }

// en base a esto, implementar las siguientes funciones en el prototipo de Queue:
// * siguienteTurno: deberá buscar si algun paciente posee el estado "prioridad", en caso positivo
// quitar a ese paciente de la Queue, pasar su estado a "atendido", y retornarlo. en caso contrario
// quitar el primer elemento de la Queue de la misma forma antes mencionada.
//UTILIZAR UNA STACK PARA RECORRER LA QUEUE Y MANTENER EL ORDEN 

//EXTRA CREDIT: CONTROLAR TIPOS DE DATO ERRONEOS O QUEUE VACIAS

//TU CODIGO AQUI



}





module.exports = {
    efectoEspejo,
    turnos
}