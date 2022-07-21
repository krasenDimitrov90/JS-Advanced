(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (num) {
        let length = this.length;
        let newArr = []
        for (let i = num ; i < length; i++) {
            newArr.push(this[i]);
        }
        return newArr;
    }

    Array.prototype.take = function (num) {
        let newArr = [];
        for (let i = 0; i < num; i++) {
            newArr.push(this[i]);
        }
        return newArr;
    }

    Array.prototype.sum = function () {
        let sum = 0;
        for (let num of this) {
            sum += Number(num);
        }
        return sum;
    }

    Array.prototype.average = function () {
        let sum = 0;
        for (let num of this) {
            sum += Number(num)
        }
        return sum / this.length;
    }
})()

let arr = [1,2,3];
let arr2 = arr.skip(2);
let arr3 = arr.take(3);

console.log(arr.last());
console.log(arr2);
console.log(arr3);
console.log(arr);

console.log(Array.prototype);