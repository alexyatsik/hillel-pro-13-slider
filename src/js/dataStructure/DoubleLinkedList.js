function DoubleLinkedList() {
    this.head = null;
    this.tail = null;
    this.current = null;

    this.addNode = function(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.head.next = this.head;
            this.head.prev = this.head;
            this.current = this.head;
        } else if (this.tail === null) {
            this.tail = node;
            this.tail.next = this.head;            
            this.tail.prev = this.head;
            this.head.next = this.tail;
            this.head.prev = this.tail;
        } else {
            this.tail.next = node;
            this.head.prev = node;
            node.next = this.head;
            node.prev = this.tail;
            this.tail = node;
        }
    };

    this.getCurrentNode = function() {
        return this.current.value;
    }

    this.nextNode = function() {
        this.current = this.current.next;
    }

    this.prevNode = function() {
        this.current = this.current.prev;
    }
}