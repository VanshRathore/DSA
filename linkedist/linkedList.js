class Node{
    constructor(data){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.data = null
    }

    addFirst(data){
        const newNode = new Node();
        newNode.next = this.head;
        this.head = newNode; 
    }

    addLast(data){
        const newNode = new Node();

        if(!this.head){
            this.head = newNode;
            return
        }

        let current = this.head;
        while (current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    size(){
        let count = 0;
        let current = this.head;
        while (current){
            count++;
            current = current.next;
        }
        return count;
        
    }

    addAt(Index, data){
        if(Index < 0 || Index > this.size()){
            console.error("InvalidIndex");
            return
        }
        
        const newNode = new Node();

        if (Index == 0){
            newNode.next = this.head;
            this.head = newNode;
            return
        }

        let current = this.head;
        for (let i = 0; i < Index-1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
        
    }
}