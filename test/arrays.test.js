const {
    elementoEnComun,
    invertirOrden
} = require('../01-arrays/01-arrays')


describe('elementoEnComun(array1, array2)', function() {
    it('Deberia retornar el elementos en comun entre los arrays que recibe por parametro', function() {
      expect(elementoEnComun([10, 15, 24], [2, 19, 10])).toBe(10);
      expect(elementoEnComun([1, 3, "hola", false], [2, 5, "hola"])).toBe("hola")
    });
});


describe('invertirOrden(array)', function() {
    it('Deberia retornar un array con los elementos invertirdos del array que recibe por parametro', function (){
       expect(invertirOrden([10, 15, 24])).toStrictEqual([24, 15, 10])
       expect(invertirOrden(["left", "center", "rigth"])).toStrictEqual(["rigth", "center", "left"])
    })
})

  