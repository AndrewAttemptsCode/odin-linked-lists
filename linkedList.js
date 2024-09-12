// Structure of a linked list
// A linked list is a linear collection of data
// elements called nodes that “point” to the next
// node by means of a pointer.

// Each node holds a single element of data and a
// link or pointer to the next node in the list.

// A head node is the first node in the list, a
// tail node is the last node in the list.
// Below is a basic representation of a linked list:

// [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // append(value) adds a new node containing value to the end of the list

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  // prepend(value) adds a new node containing value to the start of the list

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  // size returns the total number of nodes in the list

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  // head returns the first node in the list

  getHead() {
    return this.head;
  }

  // tail returns the last node in the list

  getTail() {
    if (this.head === null) return null;

    let currentNode = this.head;
    
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  // at(index) returns the node at the given index

  at(index) {
    if (this.head === null) return null;

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return currentNode !== null ? currentNode : null;
  }

  // pop removes the last element from the list

  pop() {
    if (this.head === null) return null;

    if (this.head.nextNode === null) {
      this.head = null;
    }

    let currentNode = this.head;
    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.pop();
list.getHead();
list.prepend("parrot");
list.getHead();
list.append("hamster");
list.append("snake");
list.append("turtle");
list.size();
list.getTail();
list.at(4);

