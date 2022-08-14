import LinkedList from "./linkedList.js";


describe('A linkedlist', () => {
  const list = new LinkedList();

  it('new lists are created empty', () => {
    expect(list.getHead()).toBe(-1);
  });
  
  it('can append nodes to the list', () => {    
    list.append(1);
    expect(list.getHead().value).toBe(1);
  });

  it('can access tail of list', () => {
    expect(list.getTail().value).toBe(1);
  });

  it('can add nodes to the front of list', () => {
    list.prepend(2);
    expect(list.getHead().value).toBe(2);
  });

  it('properly updates length/accesses size', () => {
    expect(list.size()).toBe(2);
  });

  it('can access nodes via index', () => {
    list.prepend(3);
    list.prepend(4);
    expect(list.at(1).value).toBe(3);
  });

  it('pop removes and returns last node from list', () => {
    const lastNode = list.getTail();
    expect(list.pop()).toBe(lastNode);
  });

  it('tail next property should be null ', () => {
    expect(list.getTail().next).toBe(null);
  });

  it('can check if list contains a particular value', () => {
    expect(list.contains(2)).toBe(true);    
  });

  it('returns false if list does not contain value', () => {
    expect(list.contains(12)).toBe(false);    
  });

  it('find index of node with a given value', () => {
    expect(list.find(3)).toBe(1);
  });

  it('returns null when list does not hold value', () => {
    expect(list.find(21)).toBe(null);
  });
  
  it('toString properly represents list of node values', ()=> {
    expect(list.toString()).toBe("( 4 ) -> ( 3 ) -> ( 2 ) -> null");
  });

  it('can insert at a given index', () => {    
    list.insertAt(13, 1);       
    expect(list.at(1).value).toBe(13);
  });

});

export default describe;