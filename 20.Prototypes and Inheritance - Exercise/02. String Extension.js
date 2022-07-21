(function () {

    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this;
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this;
    }

    String.prototype.isEmpty = function () {
        if (!this.length) {
            return true
        }
        return false;
    }

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this;
        }
        if (this.length > n) {
            let lastIndex = this.substring(0, n - 2).lastIndexOf(' ');
            if (lastIndex) {
                return this.substring(0, lastIndex) + '...'
            }
            return this.substring(0, n - 3) + '...'
        }
        if (n < 3) {
            return '.'.repeat(n);
        }
    }

    // String.prototype.format = function (string, ...params) {

    // }
})();

let str = 'my string';
console.log(str);
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);

