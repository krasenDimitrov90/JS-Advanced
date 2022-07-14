class Stringer {
    constructor(string, length) {
        this.innerString = string,
        this.innerLength = length
    }
    increase(length) {
        this.innerLength += length
    }
    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length
        }
    }
    toString() {
        let length = this.innerLength
        if (this.innerString.length > length && length > 0) {
            return this.innerString.slice(0, length) + '...'
        }
        if (length === 0) {
            return '...'
        }
        return this.innerString
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
