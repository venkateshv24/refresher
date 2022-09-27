class Graph {
    constructor(){
        this.adjacentList = {}
    }

    addVertex(value){
        this.adjacentList[value] = [];
        return this
    }
    addEdge(vertex1,vertex2){
        this.adjacentList[vertex1].push(vertex2)
        this.adjacentList[vertex2].push(vertex1)
        return this
    }
    removeEdge(vertex1,vertex2){
        this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(ele => ele !== vertex2)
        this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(ele => ele !== vertex1)
        return this
    }
    removeVertex(vertex){
        let arr = this.adjacentList[vertex];
        for(let val of arr){
            // this.adjacentList[val] = this.adjacentList[val].filter(ele => ele !== vertex)
            this.removeEdge(vertex,val)
        }
        delete this.adjacentList[vertex]
        return this
    }
}

const graph = new Graph();
console.log(graph.addVertex("A"))
console.log(graph.addVertex("B"))
console.log(graph.addVertex("C"))
console.log(graph.addVertex("D"))
console.log(graph.addEdge("A","B"))
console.log(graph.addEdge("B","C"))
console.log(graph.addEdge("A","C"))
console.log(graph.addEdge("A","D"))
console.log(graph.removeVertex("A"))
