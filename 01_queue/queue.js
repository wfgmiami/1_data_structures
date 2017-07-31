var Queue = function(){
  this.queue = [];
  this.beg = 0;
  this.end = 0;
}

Queue.prototype.enqueue = function(val){
  this.queue[this.end++] = val;

}

Queue.prototype.dequeue = function(){

  return this.beg === this.end ? undefined : this.queue[this.beg++];
}

Queue.prototype.size = function(){
  return this.end - this.beg;
}


