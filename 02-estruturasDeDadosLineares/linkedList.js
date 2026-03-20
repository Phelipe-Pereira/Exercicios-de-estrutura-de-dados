class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtEnd(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    removeValueAtEnd() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current.next !== null) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
    }

    search(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return true;
            }

            current = current.next;
        }

        return false;
    }
}

let listaEncadeada = new LinkedList();
listaEncadeada.insertAtBeginning(10);
console.log(listaEncadeada);

listaEncadeada.insertAtEnd(20);
console.log(listaEncadeada);

listaEncadeada.insertAtEnd(30);
console.log(listaEncadeada);

listaEncadeada.removeValueAtEnd();
console.log(listaEncadeada);

console.log(listaEncadeada.search(10));