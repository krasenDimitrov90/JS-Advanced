// 3 maybe more hours for this task ;D

function hierarchy() {
    function Figure(units = 'cm') {
        this.units = units;
        this.multiplyer = 1;
    }
    
    Figure.prototype.changeUnits = function (newUnits) {
        this.units = newUnits;
        switch (this.units) {
            case 'mm':
                this.multiplyer = 10;
                break;
            case 'cm':
                this.multiplyer = 1;
                break;
            case 'm':
                this.multiplyer = 0.01;
                break
        }
        return this.multiplyer;
    }
    Figure.prototype.toString = function () {
        if (this.constructor.name === 'Circle') {
            let radius = this.radius * this.multiplyer;
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${radius}`;
        }
        if (this.constructor.name === 'Rectangle') {
            let width = this.width * this.multiplyer;
            let height = this.height * this.multiplyer;
            return `Figures units: ${this.units} Area: ${this.area} - width: ${width}, height: ${height}`
        }
        return `Figures units: ${this.units}`;
    }
    
    Object.defineProperty(Figure.prototype, 'area', {
        get: function () {
            if (this.constructor.name === 'Circle') {
                return Math.PI * ((this.multiplyer * this.radius) ** 2);
            }
            if (this.constructor.name === 'Rectangle') {
                this.changeUnits(this.units);
                return (this.width * this.multiplyer) * (this.height * this.multiplyer);
            }
        }
    })
    
    function Circle(radius) {
        Figure.call(this);
        this.radius = radius * this.multiplyer;
    }
    
    function Rectangle(width, height, units) {
        Figure.call(this,units);
        this.width = width * this.multiplyer;
        this.height = height * this.multiplyer;
    }
    
    Circle.prototype = Object.create(Figure.prototype, {
        constructor: { value: Circle, configurable: true }
    });
    
    Rectangle.prototype = Object.create(Figure.prototype, {
        constructor: { value: Rectangle, configurable: true }
    })

    return {Figure, Circle, Rectangle}
}



let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

