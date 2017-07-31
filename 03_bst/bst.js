function BinarySearchTree(val){
	this.value = val;
	this.left = null;
	this.right = null;
	//this.cnt_size = 1;
}

BinarySearchTree.prototype.insert = function(val){
	// prof
	var direction = val >= this.value ? 'right' : 'left';
	if (this[direction])
		this[direction].insert(val);
	else
		this[direction] = new BinarySearchTree(val);

//mine
  /*if (val >= this.value){
      if(this.right){
        this.right.insert(val);
      }else{
        this.right = new BinarySearchTree(val);
      }
  }else{
      if(this.left){
        this.left.insert(val);
      }else{
        this.left = new BinarySearchTree(val);
      }
  }
	this.cnt_size++;
	*/
}

BinarySearchTree.prototype.contains = function(val){
	var flag = false;

	if (this.value === val){
		return true;
	}

	if (this.left && !flag){
		flag = this.left.contains(val);
	}
	if (this.right && !flag){
		flag = this.right.contains(val);
	}
	return flag;
}

BinarySearchTree.prototype.size = function(){
	// prof
	//return this.cnt_size;

	//mine
	var cnt = 0;

	if (this.value)
		cnt++;

	if (this.left){
		cnt += this.left.size();
	}

	if (this.right){
		cnt += this.right.size();
	}

	return cnt;

}

BinarySearchTree.prototype.depthFirstForEach = function(fn,val){
	val = val || 'in-order';

	if (val === 'in-order'){
		if(this.left){
      this.left.depthFirstForEach(fn,val);
		}

    if(this.right){
      fn(this.value);
      this.right.depthFirstForEach(fn,val)
    }else{
      fn(this.value);
		}

  }else if (val === 'pre-order'){
    fn(this.value);

		if (this.left){
			this.left.depthFirstForEach(fn,val);
		}
		if (this.right){
			this.right.depthFirstForEach(fn,val);
		}

	}else if (val === 'post-order'){

		if (this.left){
			this.left.depthFirstForEach(fn,val);
		}

		if (this.right){
			this.right.depthFirstForEach(fn,val);
		}
		fn(this.value);
	}

}

BinarySearchTree.prototype.breadthFirstForEach = function(fn){
	var node = [this];

	while( node.length > 0 ){
		var nd = node.shift();
		fn(nd.value);
		if( nd.left ) node.push( nd.left );
		if( nd.right ) node.push( nd.right );

	}


}
