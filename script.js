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
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}