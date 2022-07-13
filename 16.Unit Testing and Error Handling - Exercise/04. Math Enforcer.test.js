const mathEnforcer = require('./04. Math Enforcer');
const expect = require('chai').expect;

describe('Test fn mathEnforcer', () => {
    describe('Test addFive()',() => {
        it('Should return undefined', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        })
        it('Should return 10', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        })
        it('Should return 5', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        })
        it('Should return 2', () => {
            expect(mathEnforcer.addFive(-3)).to.equal(2);
        })
        it('Should return -2', () => {
            expect(mathEnforcer.addFive(-7)).to.equal(-2);
        })
        it('Should return 6.1', () => {
            expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
        })
        it('Should return -1.1', () => {
            expect(mathEnforcer.addFive(-6.1)).to.be.closeTo(-1.1, 0.01);
        })
    })

    describe('Test subtractTen()', () => {
        it('Should return undefined', () => {
            expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
        })
        it('Should return 10', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        })
        it('Should return -10', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        })
        it('Should return -30', () => {
            expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
        })
        it('Should return 10.1', () => {
            expect(mathEnforcer.subtractTen(20.1)).to.be.closeTo(10.1, 0.01);
        })
        it('Should return -9.9', () => {
            expect(mathEnforcer.subtractTen(0.1)).to.be.closeTo(-9.9, 0.01);
        })
    })

    describe('Test sum()', () => {
        it('Should return undefined', () => {
            expect(mathEnforcer.sum('5',5)).to.equal(undefined);
        })
        it('Should return undefined', () => {
            expect(mathEnforcer.sum('5','5')).to.equal(undefined);
        })
        it('Should return undefined', () => {
            expect(mathEnforcer.sum(5,'5')).to.equal(undefined);
        })
        it('Should return 10', () => {
            expect(mathEnforcer.sum(5,5)).to.equal(10);
        })
        it('Should return 3', () => {
            expect(mathEnforcer.sum(-2,5)).to.equal(3);
        })
        it('Should return 10.5', () => {
            expect(mathEnforcer.sum(5.5,5)).to.be.closeTo(10.5, 0.01);
        })
        it('Should return 10.5', () => {
            expect(mathEnforcer.sum(-5, -4)).to.equal(-9);
        })
        it('Should return -16', () => {
            expect(mathEnforcer.sum(-10.5, -5.5)).to.be.closeTo(-16, 0.01);
        })
    })
})