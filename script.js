"use strict";

class LinkedList{
    constructor(head = null){
        this.head = head;
    }

    append(value){
        let newNode = new Node(value);
        if (this.head === null){
            this.head = newNode;
            return this.head;
        }
         let current = this.head;
        while(current.next){
            current = current.next;
        }
            current.next = newNode;
            return this.head;
    }
    
    prepend(value){
        let newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            return this.head
        }else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this.head;
    }

    size(){
        let nodes = this.head;
        let count = 0;
        while(nodes !== null){
         count ++;
         nodes = nodes.next;
        }
        return count;
     }

    getFirst(){
        return this.head;
    }
    
    getLast(){
       let lastNode = this.head;
       if(lastNode){
        while(lastNode.next){
            lastNode = lastNode.next
        }
       }
       return lastNode;
    }

    nodeIndex(value){
        let index = 0;
        let node = this.head;
        while(node){
            if(index === value){
                return node;
            }
            node = node.next;
            index ++;
        }
        return -1;
    }

    pop(){
        let current = this.head;
        while(current.next.next){
           current = current.next;
       }
       current.next = null;
       return current;
    }

    contains(value){
        let current = this.head;
        while(current){
            if(current.data === value){
                return true;
            }
            current = current.next;
        }
          return false;
    }

    find(value){
        let current = this.head;
        let index = 0;
        while(current !== null){
          if(current.data === value){
              return `Found at index ${index}`;
          }
          current = current.next;
          index ++;
        }
        return "Not found";
    }

    toString(){
        let current = this.head;
        let str = "";
        while(current){
            str += current.data + " => " ;
            current = current.next;
        }
        str += "null";
        return str;
    }
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const list = new LinkedList();

list.prepend(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.pop();

console.log(list.size()); // returns 5 since list.pop() removed 6
console.log(list.getFirst()); // returns 1
console.log(list.getLast()); // returns 5
console.log(list.nodeIndex(0)); // returns 1
console.log(list.toString()); // returns 1 => 2 => 3 => 4 => 5 => null
console.log(list.contains(3)); // returns true
console.log(list.contains(6)); // returns false
console.log(list.find(2)); // returns Found at index 1
