const { tripPath } = require("../04-Stack/04-stack");


describe('tripPath', function() {
    it('Debe devolver yoS yrneH cuando invoco efectoEspejo con Soy Henry', function() {
      expect(tripPath('Cordoba Salta Tucuman Neuquen Jujuy')).toEqual('abodroC atlaS namucuT neuqueN yujuJ');
    });

    it('Debe devolver yoS yrneH cuando invoco efectoEspejo con Soy Henry', function() {
        expect(tripPath('Mexico Chile Peru Colombia Bolivia')).toEqual('ocixeM elihC ureP aibmoloC aiviloB');
    });
});
