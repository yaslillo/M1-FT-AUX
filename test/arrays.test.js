const {
    elementoEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    cazaDeNumeros,
    mismoValorMismosElementos
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
    it('Deberia retornar un array solo con el elemento menor y mayor que recibe por parametro', function (){
        expect(elementoMenorYMayor([10, 15, 24])).not.toContain(15)
        expect(elementoMenorYMayor([2, 4, 9, 1])).not.toContain(4)
        expect(elementoMenorYMayor([10, 15, 24])).toContain(10, 24)
        expect(elementoMenorYMayor([2, 4, 9, 1])).toContain(1, 9)
    })
});

describe('sumaDeArrays(array)', function() {
    // Falta realizar prueba
    xit('Deberia retornar un array solo con elementos de tipo numero', function() {
      expect(sumaDeArrays([[1, 3], [10, 20], [4, 5], 2])).toBe([4, 30, 9, 2])
      expect(sumaDeArrays([[5, 5], 4, [10, 15], [25, 10]])).toBe([10, 4, 25, 35])
    })
});


describe('cazaDeNumeros(array)', function() {
    // Falta realizar prueba
    xit('Deberia retornar un array con los numeros que se encuentren en los valores del objeto', function() {
      expect(cazaDeNumeros([{participantes: 10, aceptados: [true, 4], no_aceptados: [false, 6]}])).toEqual([10, 4, 6])
      expect(cazaDeNumeros([{parcelas: [20], lagunas: ['sin agua', 3], rios: 2}])).toEqual([20, 3, 2])
    })
});


  