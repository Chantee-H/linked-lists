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
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}