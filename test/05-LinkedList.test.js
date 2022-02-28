const { LinkedList } = require("../estructuras")

describe("Size", function () {
    var linkedList = new LinkedList();
    it("Size Debe retornar 0 si la lista esta vacía", function () {
        expect(linkedList.size()).to.equal(0);      
      });
    

  
    it("Size Debe retornar la cantidad de elementos que contiene la LinkedList", function () {
      linkedList.add(6);
      linkedList.add(4);
      linkedList.add(2);
      linkedList.add(7);
      linkedList.add(8);
      linkedList.add(1);      
      expect(linkedList.size()).to.equal(6);      
    });
  });


describe("Order LinkedList", function () {
  var linkedList = new LinkedList();

  it("Order Debe retornar una lista ordenada descendentemente", function () {
    linkedList.add(6);
    linkedList.add(4);
    linkedList.add(2);
    linkedList.add(7);
    linkedList.add(8);
    linkedList.add(1);
    linkedList.orderList();
    expect(linkedList.head.value).to.equal(8);
    expect(linkedList.head.next.value).to.equal(7);
    expect(linkedList.head.next.next.value).to.equal(6);
    expect(linkedList.head.next.next.next.value).to.equal(4);
    expect(linkedList.head.next.next.next.next.value).to.equal(2);
    expect(linkedList.head.next.next.next.next.next.value).to.equal(1);
  });
});

describe("Remove In Index", function () {
    var linkedList = new LinkedList();
  
    it("RemoveInIndex Debe retornar una lista ordenada descendentemente", function () {
      linkedList.add(6);
      linkedList.add(4);
      linkedList.add(2);
      linkedList.add(7);
      linkedList.add(8);
      linkedList.add(1);
      expect(linkedList.removeInIndex(3)).to.equal(2);
      expect(linkedList.size).to.equal(5);      
    });
  });