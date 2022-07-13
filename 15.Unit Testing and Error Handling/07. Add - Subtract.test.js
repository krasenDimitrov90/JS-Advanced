const createCalculator = require('./07. Add - Subtract');
const expect = require('chai').expect;

describe('Test fn createCalculator', () => {
    let calc;
 
    beforeEach(function () {
        calc = createCalculator();
    });

    describe('Test with numbers', () => {
        it('Test with add(5) and subtract(1)', () => {
            // let calc = createCalculator();
            calc.add(5);
            calc.subtract(1);
            let result = calc.get()
            expect(result).to.equal(4)
        })
        it('Test with add(10) and subtract(2)', () => {
            // let calc = createCalculator();
            calc.add(10);
            calc.subtract(2);
            let result = calc.get()
            expect(result).to.equal(8)
        })
        it('Test with add(10) ,add(5) and subtract(2)', () => {
            // let calc = createCalculator();
            calc.add(10);
            calc.add(5);
            calc.subtract(2);
            let result = calc.get()
            expect(result).to.equal(13)
        })
        it('Test with add(10) and add(5)', () => {
            // let calc = createCalculator();
            calc.add(10);
            calc.add(5);
            let result = calc.get()
            expect(result).to.equal(15)
        })
        it('Test with 0', () => {
            let result = calc.get()
            expect(result).to.equal(0)
        })
    })

    describe('Test with one stringAsNumber and one number', () => {
        it("Test with add('10') and subtract(2)", () => {
            // let calc = createCalculator();
            calc.add('10');
            calc.subtract(2);
            let result = calc.get()
            expect(result).to.equal(8)
        })
        it("Test with add(7) and subtract('2')", () => {
            // let calc = createCalculator();
            calc.add(7);
            calc.subtract('2');
            let result = calc.get()
            expect(result).to.equal(5)
        })
    })

    describe('Test with two stringsAsNumbers', () => {
        it("Test with add('10') and subtract('2')", () => {
            // let calc = createCalculator();
            calc.add('10');
            calc.subtract('2');
            let result = calc.get()
            expect(result).to.equal(8)
        })
    })

    describe('Tests with string', () => {
        it('Test with string', () => {
            calc.add('Hello');
            let result = calc.get()
            expect(result).to.be.NaN;
        })
        it('Test with string', () => {
            calc.subtract('Hello');
            let result = calc.get()
            expect(result).to.be.NaN;
        })
    })
})