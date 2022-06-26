
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].toString().length === 1) {
            newArray.unshift(array[i])
        }
    }
    return newArray
    
 
};
//console.log(invertirOrden([2, 30, 5, 3, 15])).//([3, 5, 2])


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    let suma;
    let current = 0;
    array1.forEach(element1 => {
        if (element1 < current || current === 0) {
            console.log('soy current', current)
            current = element1
        }
        array2.forEach(element2 => {
            if (element1 === element2) {
                suma = element1
            }
            if (element2 < current) {
                current = element2
            }
        });
    });
    if (!suma) return current
    return suma

};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "object") {
            var suma = 0;
            array[i].forEach(elemento => {
                suma = suma + elemento
                // aux+= e
            });
            newArray.push(suma);
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray

  
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    console.log(numero)
    console.log(divisor)

    if (numero % divisor !== 0) return false;

    let result = numero / divisor
    let array = []

    for (let i = 0; i < divisor;  i ++) {
        array.push(result)
        
    }

    return array

};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    let elementoMenor;
    let elementoMayor;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[0] > array[i]) {
            elementoMenor = array[i]
        } else {
            elementoMenor = array[0];
        }

        if (array[0] < array[i]) {
            elementoMayor = array[i];
        }
    };
    // newArray = [elementoMenor, elementoMayor];
    newArray.push(elementoMenor);
    newArray.push(elementoMayor);
    return newArray;

};

// expect(elementoMenorYMayor([10, 15, 24])).not.toContain(15)
//         expect(elementoMenorYMayor([2, 4, 9, 1])).not.toContain(4)
//         expect(elementoMenorYMayor([10, 15, 24])).toContain(10, 24)
//         expect(elementoMenorYMayor([2, 4, 9, 1])).toContain(1, 9)




module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};