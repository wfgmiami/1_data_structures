function LinkedList(){
  this.head = null;
  this.tail = null;
}

function Node(val){
  this.value = val;
  this.next = null;
  this.previous = null;
}

LinkedList.prototype.addToTail = function(val){
  var newNode = new Node(val);

  if (!this.tail){
    this.addToHead(val);
  }else{
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

LinkedList.prototype.addToHead = function(val){
  var newNode = new Node(val);
  if(!this.head){
    this.head = newNode;
    this.tail = this.head;
  }else{
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  }
}

LinkedList.prototype.removeHead = function(){

  if (!this.head){
    return null;

  }else{
    if (this.head.next === null){
      var value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }
    var value = this.head.value;
    this.head = this.head.next;
    this.head.previous = null;
    return value;
  }
}

LinkedList.prototype.removeTail = function(){
  if(!this.tail){
    return null;
  }else{
    if(this.tail.previous == null){
      var value = this.tail.value;
      this.tail = null;
      this.head = null;
      return value;
    }
    var value = this.tail.value;
    this.tail = this.tail.previous;
    this.tail.next = null;
    return value;
  }
}

LinkedList.prototype.search = function(item){
  var current = this.head;

  if (typeof item === 'function'){
    while (!item(current.value) && current.next !== null){
      current = current.next;
    }
    if (item(current.value)){
      return current.value;
    }
    return null;

  }else{

    while (current.value !== item && current.next !== null){
        current = current.next;
    }
    if (current.value === item){
      return current.value;
    }
    return null;
  }
}

function Queue(){
  this.queue = new LinkedList();
}

Queue.prototype.enqueue = function(val){
  this.queue.addToTail(val);
}

Queue.prototype.dequeue = function(){
  var result = this.queue.removeHead();
  if (!result)
    return undefined;
  return result;
}

Queue.prototype.size = function(){
  var node = this.queue.head;
  var cnt = 1;

  if (!node){
    return 0;
  }else{
    while(node.next !== null){
      node = node.next;
      cnt++;
    }
  }
  return cnt;
}

var queue = new Queue();
