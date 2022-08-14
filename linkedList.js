export default class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  append(value) {
    let newNode = new ListNode(value);
    if(!this.head){
      this.head = newNode;      
    }else{
      this.tail.next = newNode;      
    }
    this.tail = newNode;
    this.length++;    
  }

  prepend(value){
    let newNode = new ListNode(value);
    if(!this.head){
      this.append(newNode);
    }else{
      newNode.next = this.head;
      this.head = newNode;
      this.length++;      
    }    
  }

  size(){
    return this.length;
  }
  
  getHead(){
    return this.head || -1;
  }

  getTail(){
    return this.tail || -1;
  }

  at(index){
    if(this.length === 0 || index >= this.length){
      return undefined;
    }
    let currentNode = this.head;
    let i = 0; 
    while(i < index){
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  pop(){    
    const lastNode = this.getTail();
    console.log(lastNode);
    this.tail = this.at(this.length-2);
    this.tail.next = null;    
    
    return lastNode;    
  }

  contains(value){
    let current = this.head;
    let searching = true;
    while(searching){
      if(current.value === value){
        return true;
      }
      if(current.next === null){
        searching = false;
      }
      current = current.next;
    }
    return false;
  }

  find(value){
    let current = this.head;
    let index = 0;
    while(index < this.length){
      if(current.value === value){
        return index;
      }
      if(current.next){
        current = current.next;
      }      
      index++;
    }
    return null;
  }

  toString(){
    let result = '';
    let current = this.head;
    while(current){
      result += `( ${current.value} ) -> `;
      current = current.next;
    }
    return result += 'null';
  }

  insertAt(value, index){
    if(index === 0){
      this.prepend(value);
      return;
    }
    if (index > this.length){
      return -1;
    }
    if(index === this.length){
      this.append(value);
      return;
    }
    let current = this.head;
    let currentIndex = 0;
    while(currentIndex < index){
      if(currentIndex + 1 === index){
        let insertedNode = new ListNode(value, current.next);
        current.next = insertedNode;
      }
      current = current.next;
      currentIndex++;
    }
  }

}


class ListNode {
  constructor( value = null, next = null ){
    this.value = value;
    this.next = next;
  }

}

