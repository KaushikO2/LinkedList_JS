const prompt=require("prompt-sync")({sigint:true}); 
class Node {
    constructor(data, next=null){
        this.data=data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size=0;
    }

    insertNode(data){
        this.head = new Node(data, this.head)
        this.size++
    }
    //reverse
    reverse(){
        let prev = null;
        let current = this.head;
        let next = null;

        while(current!=null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    //secondlargestnumber
    findSecondLargest(){
        if(!this.head || !this.head.next){
            console.log("List has less than 2 elements.");
            return;
        }
        let fistLargest = -Infinity; //-Infinity is used because: any real number > -Infinity, and if the list is to be empty it just returns firstLargest.
        let secondLargest = -Infinity;

        let current = this.head;
        while(current!=null){
            if(current.data>fistLargest){
                secondLargest = fistLargest;
                fistLargest = current.data;
            }else if(current.data>secondLargest && current.data<fistLargest){
                secondLargest = current.data;

            }
            current=current.next
            
        }
        if(secondLargest === -Infinity){
            console.log("There is no second largest number")
        }else{
            console.log("Second largest number: " + secondLargest);
        }
    }
    // print all the numbers
    printData(){
        let current = this.head
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
    //inserLast
    insertLast(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node
        }else{
            current = this.head
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }


}

const result  = new LinkedList;
userInput = [5,6,8,3,1]
userInput.forEach((number)=>result.insertNode(number))
//result.insertLast(9)
console.log(result)
result.reverse()
console.log(result)
result.findSecondLargest()
