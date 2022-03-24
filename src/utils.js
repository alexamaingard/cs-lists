const convertToArray = (head) => {
    const list = [];

    let current = head;

    while(current){
        list.push(current.data);
        current = current.next;
    }

    return list;
}

module.exports = {
    convertToArray
}