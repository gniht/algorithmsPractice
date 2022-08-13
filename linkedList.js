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
}





class ListNode {
  constructor( value = null, next = null ){
    this.value = value;
    this.next = next;
  }

}

