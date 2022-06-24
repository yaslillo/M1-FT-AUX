// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

const producto = function (array) {
  //escribe aqui tu codigo

  // console.log("array ", array);
  // if (array.length === 0) {
  //   return true;
  // } else {
  //   return array.pop() * producto(array);

  // }

};

// console.log(producto([7, 9, 3]))//(189);
// console.log(producto([11, 22, 33]))//(7986);
// console.log(producto([22, 9, 3]))//(594);

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
let obj = {
     prop2:{value:5},
      school: {
            hogwarts: {
                  headmaster:{
                      name: {
                          first: "Albus",
                          last: "Dumbledore"
                        }
                      }
                  }
              }
            }

const isThere = function (obj,value) {
  
}       




module.exports = { producto, isThere };

