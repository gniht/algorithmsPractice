
import Tree from './binarySearchTree.js';

describe('A binary search tree', () => {
  const data = [1, 3, 5]//, 7, 9, 13, 14, 42, 67, 84, 86, 144, 324, 328];
  const tree = new Tree(data);

  it('builds a balanced tree', () => {
    expect(tree.root.value).toBe(3);
  });

  it('can find the node with a given value', () => {
    expect(tree.find(3)).toBe(tree.root);
  });

  it('can determine when a given value is not in the tree', () => {
    expect(tree.find(0)).toBe(-1);
  });

});
