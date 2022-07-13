const isOddOrEven = require('./02. Even Or Odd');
const expect = require('chai').expect;

describe('Test fn isOddOrEven', () => {
    describe('Test with not string inputs', () => {
        it('Should return undefind whit number', () => {
            expect(isOddOrEven(5)).to.equal(undefined);
        })
        it('Should return undefind whit array', () => {
            expect(isOddOrEven([1,2,3])).to.equal(undefined);
        })
    })

    describe('Test with strings', () => {
        it('Should return even with string', () => {
            expect(isOddOrEven('Hi')).to.equal('even')
        })
        it('Should return odd with string', () => {
            expect(isOddOrEven('hello')).to.equal('odd')
        })
        it('Should return odd or even with string', () => {
            expect(isOddOrEven('hello')).to.equal('odd')
            expect(isOddOrEven('Krasen')).to.equal('even')
            expect(isOddOrEven('Doch')).to.equal('even')
            expect(isOddOrEven('Stephan')).to.equal('odd')
        })
    })
})