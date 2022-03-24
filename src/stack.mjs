/* 
Implementation of a Stack as a linked list
*/

import { convertToArray } from "./utils.js";

export const stack = () => {

    let size = 0;
    let head = null;

    /* 
    Conceptual description
    Add element to the top of the stack
    */
    const push = (data) => {
        let newNode = { data: data, next: head };
        head = newNode;
        size++;
    }

    /* 
    Conceptual description
    Remove element from the top of the stack
    */
    const pop = () => {
        const toPop = head;
        head = toPop.next;
        size--;

        return toPop.data;
    }

    /* 
    Conceptual descriptions of each of the next 2 functions
    Top: Used to access the top of the stack container
    getSize: Used to get the size (number or elements present) of the stack. 
    */
    const top = () => {
        return head.data;
    }

    const getSize = () => {
        return size;
    }

    /* 
    Conceptual description
    Used to form an array of the same elements as that of the stack
    */
    const toArray = () => {
        const stackList = convertToArray(head);

        return stackList;
    }

    return { push, pop, top, getSize, toArray };
}