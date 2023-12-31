class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    isEmpty(){
        return this.length === 0
    }
    push(value){
        let newNode = {
            value: value,
            next: null
        }
        if(this.isEmpty()){
            this.head = newNode,
            this.tail = newNode
        }else{
            this.tail.next = newNode,
            this.tail = newNode
        }
        this.length++
    }
    pop(){
        if(!this.head){
            return null;
        }
        if(this.length === 1){
            let removeNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removeNode;   
        }
        let currentNode = this.head;
        let lastNode = this.tail;
        let newLastNode 
        while(currentNode){
            if(currentNode.next == this.tail){
                newLastNode = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
        newLastNode.next = null;
        this.length--;
        return lastNode;
    }
    shift(){
        if(!this.head){
            return null;
        }
        let currentNode = this.head;
        this.head = currentNode.next;
        this.length--;
        if(this.length=== 0){
            this.tail = null;
        }
        return currentNode;
    }
    unshift(value){
        let newNode = {
            value: value,
            next : null
        }
        if(!this.head){
            this.head = newNode,
            this.tail = newNode
        }else{
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
    }
    showList(){
        let arr = [];
        let currentNode = this.head;
        while(currentNode){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}

let val = new linkedList();
val.push(5)
val.push(15)
val.push(25)
// val.pop()
val.shift()
val.unshift(100)
console.log(val.showList())
console.log(val)