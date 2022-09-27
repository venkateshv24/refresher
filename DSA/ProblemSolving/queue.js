class Node{
    constructor(value){
        this.value= value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value){
        let newNode = new Node(value)
        if(!this.size){
            this.first = newNode;
            this.last = this.first;
        } else {
            let last = this.last;
            last.next= newNode
            this.last = newNode;
        }

        return this.size++
    }
    dequeue(){
        if(!this.size){
            return undefined
        } else if(!this.first.next){
            this.first = null;
            this.last = null;
        } else {
            let newFirst = this.first.next;
            this.first = newFirst;
        }

        return this.size--;
    }
}

const que = new Queue();
que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
// que.dequeue()
// que.dequeue()
// que.dequeue()
console.log(que)