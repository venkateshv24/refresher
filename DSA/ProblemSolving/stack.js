class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value){
        let newNode = new Node(value);
        if(!this.size){
            this.first = newNode;
            this.last = this.first;
        } else {
            let currentFirst = this.first;
            this.first = newNode;
            this.first.next = currentFirst;
        }
        return this.size++;
    }
    pop(){
        let currentFirst = this.first;
        if(!this.size){
            return undefined
        } else if(!this.first.next){
            this.first = null;
            this.last = null;
        } else {
            this.first = currentFirst.next;
        }
        this.size--;
        return currentFirst;
    }
}

const stackInstance = new Stack()
// stackInstance.push(1)
// stackInstance.push(2)
// stackInstance.push(3)
// console.log(stackInstance.pop())
console.log(stackInstance.pop())
console.log(stackInstance)