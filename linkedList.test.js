import LinkedList from "./linkedList.js";


describe('A linkedlist', () => {
  const list = new LinkedList();

  it('new lists are created empty', () => {
    expect(list.getHead()).toBe(-1);
  });

  //it('has head and tail when populated');

  //it('can add nodes to the end of list');

  //it('can add nodes to the front of list');

});

export default describe;