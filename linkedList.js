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

}

class ListNode {
  constructor( value = null, next = null ){
    this.value = value;
    this.next = next;
  }

}

