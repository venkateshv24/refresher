class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value)
        if(!this.root){
            return this.root = newNode
        } else {
                let current = this.root
                while(!!current){
                    if(value === current.value) return undefined;
                    if(value < current.value ){
                        if(!current.left){
                            current.left = newNode
                            return this;
                        } else {
                            current = current.left;
                        }
                    } else if(value > current.value){
                        if(!current.right){
                            current.right = newNode;
                            return this
                        } else {
                            current = current.right
                        }
                    }
                }
        } 
        return this
    }
    find(value) {
        if(!this.root){
            return undefined
        } 
        let current = this.root
        while(!!current){
            if(current.value === value) return current;
            if(value < current.value){
                if(current.left) {
                    current = current.left
                } else {
                    return undefined
                }
            } else if(value > current.value){
                if(current.right){
                    current = current.right
                } else {
                    return undefined
                }
            }
        }   
    }
    contains(value){
        if(!this.root){
            return false
        } 
        let current = this.root,found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left
            } else if(value > current.value){
                current = current.right
            } else {
                return found = true
            }
        }
        return false
    }
    bfs(){
        let queue = [], data = [];
        let node = this.root;
        queue.push(node)
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data
    }
    dfsPreorder(){
        let visited = [];
        let current = this.root;
        function helper(node){
            visited.push(node.value);
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
        }
        helper(current);
        return visited
    }
    dfsPostorder() {
        let visited = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value)
        }
        traverse(current)
        return visited
    }
    dfsInorder() {
        let visited = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            visited.push(node.value)
            if(node.right) traverse(node.right);
        }
        traverse(current)
        return visited
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst.bfs())
console.log(bst.dfsPreorder())
console.log(bst.dfsPostorder())
console.log(bst.dfsInorder())

