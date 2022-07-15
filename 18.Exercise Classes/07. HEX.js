// DIDN'T MAKE IT OF MY OWN :D
// THE plus() , minus() and parse() methods doesn't remake the value
// they just return a new result every time when were called.
// The value is still the same as the time of creation
class Hex {
    constructor(value) {
        this.value = value
    }
    valueOf() {
        return this.value
    }
    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }
    plus(num) {
        let result = this.value + Number(num.valueOf());
        return new Hex(result)
    }
    minus(num) {
        let result = this.value - Number(num.valueOf());
        return new Hex(result)
    }
    parse(str) {
        return parseInt(str, 16)
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
console.log(a.valueOf());


