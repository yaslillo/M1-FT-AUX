const { Queue } = require("../estructuras")
// Implementar la función controlAcces: a partir de una Queue que va a recibir como parámetro, que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es verificar uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido).
// - Tener un ticket que corresponda con el evento (prop event de ticket).
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket.
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola. 





    var queue = new Queue();

    queue.enqueue({
      fullname: "Franco Etcheverri",
      age: 26,
      ticket: { number: 1, event: "Tomorrowland" },
    });
    queue.enqueue({
      fullname: "Toni Tralice",
      age: 30,
      ticket: { number: 2, event: "Tomorrowland" },
    });
    queue.enqueue({
      fullname: "Agus Amani",
      age: 26,
      ticket: { number: 1, event: "Tomorrowland" },
    });
    queue.enqueue({
      fullname: "Leo Maglia",
      age: 40,
      ticket: { number: 3, event: "Recital Queen" },
    });
    queue.enqueue({
      fullname: "Bart Simpson",
      age: 10,
      ticket: { number: 3, event: "Tomorrowland" },
    });
    queue.enqueue({
      fullname: "Cosme Fulanito",
      age: 10,
      ticket: { event: "Tomorrowland" },
    });
  

    var controlAcces = function(queue, event){
        //Tu código aca:
    };
       


  module.exports = {
    controlAcces,
   
}


console.log(controlAcces(queue,"Tomorrowland"))