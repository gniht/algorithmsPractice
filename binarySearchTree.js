
class Tree {
  constructor(arr){
    this.root = buildTree(arr);    
  }  
}

class TreeNode {
  constructor(value = null, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function buildTree(sortedArray){
  if(sortedArray.length === 0){
    return null;
  }
  const mid = Math.floor(sortedArray.length/2);
  const front = [];
  const back = [];
  
  for(let i = 0; i < mid; i++){
    front.push(sortedArray[i]);
  }
  for(let i = mid+1; i < sortedArray.length; i++){
    back.push(sortedArray[i]);      
  }
  const rootNode = new TreeNode(
    sortedArray[mid],
    buildTree(front),
    buildTree(back)
  );
  return rootNode;
}



export default Tree;