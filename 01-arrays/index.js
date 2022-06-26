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
                console.log(suma)
            });
            newArray.push(suma);
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray
    
  
};
console.log(sumaDeArrays([3,4,5,8,20]))
