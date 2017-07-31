
//1. Queue with Array
//2. Queue with Linked List

//1. Linked List

//1. Hash Table with Linked List (using JS Objects in the linked list: {key: "key1", value: "val"}
//2. Hash Table with Linked List (using Arrays in the linked list: [key, val]
//3. Hash Table with Linked List (using Associationg List in the linked list)

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

	if (!this.head){
		this.addToHead(val);
	}else{
		newNode.previous = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
	}
}

LinkedList.prototype.addToHead = function(val){
	var newNode = new Node(val);

	if (!this.head){
		this.head = newNode;
		this.tail = this.head;
	}else{
		newNode.next = this.head;
		this.head.previous = newNode;
		this.head = newNode;
	}
}

LinkedList.prototype.removeTail = function(){

	if (!this.tail){
		return null;
	}else{
		var result = this.tail.value;
		if (this.tail.previous === null){
			this.tail = null;
		}else{
			this.tail = this.tail.previous;
			this.tail.next = null;
		}

	}
	return result;
}

LinkedList.prototype.removeHead = function(){
	if(!this.head){
		return null;
	}else{
		var result = this.head.value;

		if (this.head.next === null){
			this.head = null;

		}else{
			this.head = this.head.next;
			this.head.previous = null;
		}
	}
	return result;
}

LinkedList.prototype.search = function(str){

	var result = null;
	var funcFlag = false;
	var nd = this.head;

	if (typeof str === "function")
		funcFlag = true;


		if (!nd === null){
			return result;

		}else if (nd.next === null && !funcFlag ) {
			if (nd.value === str)
			return nd.value;

		}else if (!funcFlag ){

			while(nd.next !== null && nd.value !== str){
				nd = nd.next;
			}
			if (nd.value == str)
				return nd.value;

		}else if (nd.next === null && funcFlag ){
			if (str(nd.value))
				return nd.value

		}else if(funcFlag){
			while(nd.next !== null && !str(nd.value)){
				nd = nd.next;
			}
			if (str(nd.value))
				return nd.value
		}


	return result;

}



function HashTable(){
	this.table = new Array(35);
	this.numBuckets = this.table.length;
}

HashTable.prototype.set = function(){
	var args = Array.prototype.slice.call(arguments);
	if (typeof args[0] !== "string")
		throw new TypeError("Keys must be strings!");

	var hash = this.hash(args[0]);

	var val = {
		key: args[0],
		value: args[1]
	}

 if (!this.table[hash]){
		this.table[hash] = new LinkedList();
		this.table[hash].addToHead(val);

	}else if(!this.hasKey(args[0])){
		this.table[hash].addToTail(val);

	}else if (this.hasKey(args[0])) {
		this.table[hash].head.value = val;
	}

}


HashTable.prototype.get = function(key){
	var index = this.hash(key);
	if (!this.table[index])
		return false;
	var result = this.table[index].search(function(obj){
		return obj.key === key;

	});

	if (!result)
		return false
	return result.value;


}

HashTable.prototype.hasKey = function(key){
	if (this.get(key))
		return true;
	return false;
}

HashTable.prototype.hash = function(str){
	var hash = 0;
	for (var i = 0; i < str.length; i++){

		hash += str.charCodeAt(i);
	}
	return hash % this.numBuckets;
}



