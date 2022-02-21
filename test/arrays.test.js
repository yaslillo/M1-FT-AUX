const {
    elementoEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    elementosUnicos
} = require('../01-arrays/01-arrays')


describe('elementoEnComun(array1, array2)', function() {
    xit('Deberia retornar el elementos en comun entre los arrays que recibe por parametro', function() {
      expect(elementoEnComun([10, 15, 24], [2, 19, 10])).toBe(10);
      expect(elementoEnComun([1, 3, "hola", false], [2, 5, "hola"])).toBe("hola")
    });
});


describe('invertirOrden(array)', function() {
    xit('Deberia retornar un array con los elementos invertirdos del array que recibe por parametro', function (){
       expect(invertirOrden([10, 15, 24])).toStrictEqual([24, 15, 10])
       expect(invertirOrden(["left", "center", "rigth"])).toStrictEqual(["rigth", "center", "left"])
    })
})

describe('elementoMenorYMayor(array)', function() {
    it('Deberia retornar un array con los elementos invertirdos del array que recibe por parametro', function (){
        expect(elementoMenorYMayor([10, 15, 24])).not.toContain(15)
        expect(elementoMenorYMayor([2, 4, 9, 1])).not.toContain(4)
        expect(elementoMenorYMayor([10, 15, 24])).toContain(10, 24)
        expect(elementoMenorYMayor([2, 4, 9, 1])).toContain(1, 9)
    })
});

describe('sumaDeArrays(array)', function() {
    // o ¿Que el array ingresante por props solamente tenga arrays, sin elementos numericos dentro del array que llega pro props?
    // Si es asi, no deberian hacer el chequeo del tipo de valor
    // En cambio de esta menra tiene que chequear previamente si es o no un Array.
    xit('Deberia retornar un array solo con elementos de tipo numero, los cuales seran el resultado de la suma de cada uno de los arrays internos', function() {
      expect(sumaDeArrays([[1, 3], [10, 20], [4, 5], 2])).toBe([4, 30, 9, 2])
      expect(sumaDeArrays([[5, 5], 4, [10, 15], [25, 10]])).toBe([10, 4, 25, 35])
    })
});

  