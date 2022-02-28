const { efectoEspejo, turnos } = require("../04-Stack/04-stack&queue");
const {Queue} = require("../estructuras")


describe('efectoEspejo', function() {
    it('Debe devolver yoS yrneH cuando invoco efectoEspejo con Soy Henry', function() {
      expect(efectoEspejo('Cordoba Salta Tucuman Neuquen Jujuy')).toEqual('abodroC atlaS namucuT neuqueN yujuJ');
    });

    it('Debe devolver yoS yrneH cuando invoco efectoEspejo con Soy Henry', function() {
        expect(efectoEspejo('Mexico Chile Peru Colombia Bolivia')).toEqual('ocixeM elihC ureP aibmoloC aiviloB');
    });
});

const cola= new Queue()
cola.enqueue({nombre: "Homero",apellido: "Simpson",edad: 40,estado: "en espera"});
cola.enqueue({nombre: "Marge",apellido: "Simpson",edad: 35,estado: "en espera"});
cola.enqueue({nombre: "Abe",apellido: "Simpson",edad: 72,estado: "prioridad"});
cola.enqueue({nombre: "Jaqueline",apellido: "Bouvier",edad: 75,estado: "prioridad"});
cola.enqueue({nombre: "Lisa",apellido: "Simpson",edad: 8,estado: "en espera"});

describe('turnos', function() {
  it('Debe devolver el primer elemento con estado "prioridad" o en su defecto el primer elemento de la Queue', function() {
    expect(turnos(cola)).toEqual({nombre: "Abe",apellido: "Simpson",edad: 72,estado: "atendido"});
    expect(cola.size()).toEqual(4);
    expect(turnos(cola)).toEqual({nombre: "Jaqueline",apellido: "Bouvier",edad: 75,estado: "atendido"});
    expect(cola.size()).toEqual(3);
    expect(turnos(cola)).toEqual({nombre: "Homero",apellido: "Simpson",edad: 40,estado: "atendido"});
    expect(cola.size()).toEqual(2);
  });

  });