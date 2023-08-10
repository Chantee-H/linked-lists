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
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}