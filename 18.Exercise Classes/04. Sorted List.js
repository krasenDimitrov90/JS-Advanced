class List {
    
    constructor() {
        this.numbers = [],
        this.size = 0
    }
    
    add(el) {
        this.numbers.push(el);
        this.numbers.sort((a,b) => a - b);
        this.size++;
    }
    remove(index) {
        if (index > this.numbers.length - 1 || index < 0) {
            throw new Error('Index must be in the range of numbers array')
        }
        this.numbers.splice(index,1);
        this.numbers.sort((a,b) => a - b);

        this.size--;
    }
    get(index) {
        if (index > this.numbers.length - 1 || index < 0) {
            throw new Error('Index must be in the range of numbers array')
        }
        return this.numbers[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
list.add(5);
list.add(5);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.numbers);
console.log(list.size);
