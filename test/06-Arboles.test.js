const { BinarySearchTree } = require("../estructuras")

describe("Search", function () {
    var tree = new BinarySearchTree(1).insert(2).insert(3).insert(4).insert(5).insert(6);;
       
    it("Search debe retornar el nodo cuando se encuentra", function () {
      expect(tree.search(3)).to.equal(3);      
    });
  

  it("Search debe retornar 'no se encontró el valor' si el valor no existe en el arbol", function () {
    expect(tree.search(100)).to.equal("no se encontró el valor");      
  });
});


describe("Height", function () {
     tree = new BinarySearchTree(1).insert(2).insert(3).insert(4).insert(5).insert(6);
       
    it("Height debe retornar el nivel maximo del arbol", function () {
      expect(tree.height()).to.equal(1);         
    });
  
    tree=new BinarySearchTree(6).insert(4).insert(3).insert(5).insert(8).insert(7).insert(9);
  it("Search debe retornar 'no se encontró el valor' si el valor no existe en el arbol", function () {
    expect(tree.height()).to.equal(2);       
  });
});


