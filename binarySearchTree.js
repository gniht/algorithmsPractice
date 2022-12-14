import { mergeSort } from './mergeSort.js';

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
  
  find(value, countDepth = false){
    let depth = 0;
    let searching = true;
    let currentNode = this.root;

    while(searching){      
      if(currentNode === null || currentNode.value === value){
        searching = false;
      }else{
        if(value > currentNode.value){
          currentNode = currentNode.right;
          depth++;
        }else{
          currentNode = currentNode.left;
          depth++;
        }
      }
    }
    if(countDepth){
      return depth;
    }else{
      return currentNode ? currentNode : -1;
    }    
  }

  depth(nodeOrValue){
    if(typeof nodeOrValue === 'number'){
      return this.find(nodeOrValue, true);
    }      
    return this.find(nodeOrValue.value, true);    
  }

  delete(value){
    let searching = true;
    let previousNode = null; 
    let currentNode = this.root;

    while(searching){      
      if(currentNode === null || currentNode.value === value){
        searching = false;
      }else{
        previousNode = currentNode;
        if(value > currentNode.value){          
          currentNode = currentNode.right;
        }else{
          currentNode = currentNode.left;
        }
      }
    }
    if(currentNode === null){
      // value to delete was not in tree
      return false;
    }    
    if(!currentNode.left && !currentNode.right){
      // no children
      if(previousNode.left === currentNode){
        previousNode.left = null;
        return true;
      }else{
        previousNode.right = null;
        return true;
      }     
    }    
    if(currentNode.left && currentNode.right){
      // two children      
      let successor = currentNode.right;
      let done = false;
      while(!done){
        if(successor.left){
          successor = successor.left;
        }
        if(successor.right && (successor.right < currentNode.right.value)){
          successor = successor.right;
        }
        if(!successor.left && !successor.right){
          this.delete(successor);
          if(previousNode){
            previousNode.right = successor;
          }else{
            this.root = successor;
          }          
          successor.right = currentNode.right;
          successor.left = currentNode.left;
          return true;
        }
          done = true;
      }        
    }else if(currentNode.left){
      // left child only
      if(previousNode.left === currentNode){
        previousNode.left = currentNode.left;
        return true;
      }else{
        previousNode.right = currentNode.left;
        return true;
      }
    }else if(currentNode.right){
      // right child only
      if(previousNode.left === currentNode){
        previousNode.left = currentNode.right;
        return true;
      }else{
        previousNode.right = currentNode.right;
        return true;
      }
    }    
  }

  levelOrder(transform = null){
    let queue = [this.root];
    let levelOrderValues = [];
    
    while(queue.length > 0){
      if(queue[0].left){
        queue.push(queue[0].left);
      }
      if(queue[0].right){
        queue.push(queue[0].right);
      }
      if(transform){
        levelOrderValues.push(transform(queue.shift().value));
      }else{
        levelOrderValues.push(queue.shift().value);
      }      
    }    
    return levelOrderValues;
  }

  inorder(node = this.root){
    let currentNode = node;
    let values = [];
    
    if(currentNode.left){
      values = this.inorder(currentNode.left).concat(values);
    }
      
    values.push(currentNode.value);    
    
    if(currentNode.right){
      values = values.concat(this.inorder(currentNode.right));
    }
    return values;
  }

  preorder(node = this.root){
    let currentNode = node;
    let values = [];

    values.push(currentNode.value);

    if(currentNode.left){
      values = values.concat(this.preorder(currentNode.left));
    }
    if(currentNode.right){
      values = values.concat(this.preorder(currentNode.right));
    }
    return values;
  }

  postorder(node = this.root){
    let currentNode = node;
    let values = [];

    if(currentNode.left){
      values = values.concat(this.postorder(currentNode.left));
    }
    if(currentNode.right){
      values = values.concat(this.postorder(currentNode.right));
    }
    values.push(currentNode.value);

    return values;
  }

  height(node){
    let left = 0;
    let right = 0;
    
    if(node.left){
      left += 1 + this.height(node.left);
    }
    if(node.right){
      right += 1 + this.height(node.right);
    }
    return Math.max(left, right);
  }

  isBalanced(){
    let left = 0;
    let right = 0;
    if( this.root.left === null || this.root.right === null ){
      return this.height(this.root) <= 1;
    }
    left = this.height(this.root.left);
    right = this.height(this.root.right);  
    if(left > right){
      return left - right <= 1;
    }else{
      return right - left <= 1;
    }  
  }
  
  rebalance(){
    let temp = this.postorder();    
    temp = new Tree(mergeSort(temp));
    this.root = temp.root;
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