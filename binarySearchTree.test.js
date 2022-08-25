
import Tree from './binarySearchTree.js';

describe('A binary search tree', () => {
  const data = [1, 3, 5]//, 7, 9, 13, 14, 42, 67, 84, 86, 144, 324, 328];
  const tree = new Tree(data);
  const tree2 = new Tree([1, 3, 5, 7, 8, 10, 13]); 

  it('builds a balanced tree', () => {
    expect(tree.root.value).toBe(3);
  });

  it('can find the node with a given value', () => {
    expect(tree.find(3)).toBe(tree.root);
  });

  it('can determine when a given value is not in the tree', () => {
    expect(tree.find(0)).toBe(-1);
  });

  it('returns false when inserting a value that is already in tree', () => {
    expect(tree.insert(5)).toBe(false);
  });

  it('can properly insert new values', () => {
    expect(tree.insert(4)).toBe(true);
  });

  it('can find newly inserted values', () => {
    expect(tree.find(4)).toBe(tree.root.right);
  });
  
  it('can delete existing nodes with 1 child', () => {
    expect(tree.delete(4)).toBe(true);
  });

  it('delete returns false when item to delete is not in tree', () => {
    expect(tree.delete(4)).toBe(false);
  });

  it('properly deletes nodes with two children', () => {
    expect(tree.delete(3)).toBe(true);
  });

  it('levelOrder returns array of values in level order', () => {
    expect(tree2.levelOrder()).toEqual([7, 3, 10, 1, 5, 8, 13]);
  });

  it('levelOrder with function passed in to operate on values', () => {
    expect(tree2.levelOrder( n => n*2 )).toEqual([14, 6, 20, 2, 10, 16, 26]);
  });

  it('inorder traversal', () => {
    expect(tree2.inorder()).toEqual([1, 3, 5, 7, 8, 10, 13]);
  });

});
