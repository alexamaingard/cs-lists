/* 
Implementation of a Queue as a double linked list
*/

import { convertToArray } from "./utils.js";

export const queue = () => {

    let size = 0;
    let head, tail = null; //rear = tail

    /*
    Conceptual description:
    Add an element to the end of the collection/queue
    */
    const enQueue = (data) => {
        let newNode = { data: data, next: null, previous: tail };
        
        if(!head){  //empty queue case (first element to enter the queue)
            head = newNode;
            tail = newNode;
        }
        else {
            tail.next = newNode;
            tail = newNode;
        }

        size++;
    }

    /*
    Conceptual description:
    Remove an element from the front of the collection/queue
    */
    const deQueue = () => {
        const toDeQueue = head;
        const nextHead = head.next;
        head = nextHead;
        
        size--;

        return toDeQueue.data;
    }

    /* 
    Conceptual descriptions of each of the next 3 functions
    Front: Used to access the head of the queue (first element)
    Back: Used to access the tail of the queue (last element)
    getSize: Used to get the size (number or elements present) of the queue. 
    */
    const front = () => {
        return head.data;
    }

    const back = () => {
        return tail.data;
    }

    const getSize = () => {
        return size;
    }

    /*
    Conceptual description:
    Used to form an array of the same elements as that of the queue
    */
    const toArray = () => {
        const queueList = convertToArray(head);

        return queueList;
    }

    return { enQueue, deQueue, front, back, getSize, toArray };
}