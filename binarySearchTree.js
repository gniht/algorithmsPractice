
class Tree {
  constructor(sortedArray){
    this.nodeArray = sortedArray;
    this.root = buildTree(sortedArray);    
  }
  insert(value){
    let currentNode = this.root;
    let searching = true;
    let nodeToInsert = new TreeNode(value);
    while(searching){
      if(currentNode.value === value){
        return false;
      }
      if(value > currentNode.value){
        if(currentNode.right === null || value < currentNode.right.value){
          nodeToInsert.right = currentNode.right;
          currentNode.right = nodeToInsert;
          searching = false;
          return true; 
        }else{
          currentNode = currentNode.right;
        }
      }
      if(value < currentNode.value){
        if(currentNode.left === null || value > currentNode.left.value){
          nodeToInsert.left = currentNode.left;
          currentNode.left = nodeToInsert;
          searching = false;
          return true;
        }else{
          currentNode = currentNode.left;
        }
      }      
    }
  }
  
  find(value){
    let searching = true;
    let currentNode = this.root;
    while(searching){      
      if(currentNode === null || currentNode.value === value){
        searching = false;
      }else{
        if(value > currentNode.value){
          currentNode = currentNode.right;
        }else{
          currentNode = currentNode.left;
        }
      }
    }
    return currentNode ? currentNode : -1;
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