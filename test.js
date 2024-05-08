const arrayMethod = () => {
    class arrayStack {
        constructor() {
            this.all = []
        }
        pushing(student) {
            this.all.push(student)
            console.log(this.all);
        }
        popArray() {
            this.all.pop()
            console.log(this.all);
        }
        pickLast() {
            console.log(this.all[this.all.length - 1], "is the last index");
        }
        pickFirst() {
            this.all.splice(1, this.all.length,)
            console.log(this.all, "is the first index");
        }
        isEmpty() {
            if (this.all.length < 1) {
                console.log('Array is empty');
            } else {
                console.log('Array is not empty');
            }
        }
        print() {
            console.table(this.all)
        }
    }
    let stack = new arrayStack()
    stack.pushing("lola")
    stack.pushing("tolu")
    stack.pushing("seniorman")
    stack.pushing("mayowa")
    stack.pushing("mayowa")
    stack.pushing("mayowa")
    stack.popArray()
    stack.pickLast()
    stack.pickFirst()
    stack.isEmpty()
    stack.print()
}

// arrayMethod()


const objectMethod = () => {
    class objectStack {
        constructor() {
            this.all = {}
        }
        enqueue(value) {
            let target = { property : value};
            let pushObj=  Object.assign(target);
            this.all= pushObj
            console.log(this.all);
        }
        dequeue(){
            delete this.all.property
            console.log(this.all);
        }
        isEmpty(){
            function isEmpty(obj) {
                return Object.keys(obj).length === 0;
              }
              let emptyObj=isEmpty(this.all)
              if(emptyObj){
                  console.log("Object is empty")
              }else{
                console.log("Object is not empty")
              }
        }
    }

    let obj= new objectStack()
    obj.enqueue("kolapo")
    obj.isEmpty()
    obj.dequeue()
}

objectMethod()