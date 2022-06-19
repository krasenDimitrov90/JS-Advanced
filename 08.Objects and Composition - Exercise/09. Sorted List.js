function createSortedList() {

    let parser = {
        colection: [],
        add: function (element) {
             this.colection.push(element);
        },
        remove: function (index) {
             this.colection.splice(index,1);
        },
        get: function (index) {
            let sorted = this.colection.sort((a , b) => a - b)
            return sorted[index];  
        },
        size: function () {
            return this.colection.length;
        }
    }

    return parser;
}

let list = createSortedList();
list.add(8);
list.add(6);
list.add(5);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
list.add(8);
list.add(10);
list.add(3);
console.log(list.get(0)); 
console.log(list.get(1)); 
console.log(list.get(2)); 
console.log(list.get(3)); 
console.log(list.get(4)); 





