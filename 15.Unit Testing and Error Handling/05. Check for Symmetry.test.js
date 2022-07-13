const isSymmetric = require('./05. Check for Symmetry');
const expect = require('chai').expect;



describe('Test function isSymmetric', () => {
    describe('Tests with array of numbers ', () => {
        it('Should return true if array is symmetric', () => {
            expect(isSymmetric([1,2,3,2,1])).to.equal(true);
        })
        it('Should return false if the array is not symmetric', () => {
            expect(isSymmetric([1,2,3,4,5])).to.equal(false);
        })
        it('Should return false if the array is not symmetric', () => {
            expect(isSymmetric([1,2,3,4,5,6])).to.equal(false);
        })
        it('Should return true if the array is symmetric', () => {
            expect(isSymmetric(['a',1,2,2,1,'a'])).to.equal(true);
        })
        it('Should return false if the argument is a number', () => {
            expect(isSymmetric(5)).to.equal(false)
        })
        it('Should return false if the argument is a string', () => {
            expect(isSymmetric('Hello')).to.equal(false);
        })
    })
    
    describe('Tests with (object , null , undefined , function)', () => {
        it('Should return false if the argument is a object', () => {
            expect(isSymmetric({})).to.equal(false);
        })
        it('Should return false if the argument is a null', () => {
            expect(isSymmetric(null)).to.equal(false);
        })
        it('Should return false if the argument is a undefined', () => {
            expect(isSymmetric(undefined)).to.equal(false);
        })
        it('Should return false if the argument is a function', () => {
            expect(isSymmetric(function () {})).to.equal(false);
        })
    })
})