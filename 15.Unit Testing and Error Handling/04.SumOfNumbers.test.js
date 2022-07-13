const sum = require('./04.SumOfNumbers');
const expect = require('chai').expect;

describe('Test function sum', () => {
    it('Should return number', () => {
        expect(sum([1,2,3])).to.equal(6)
    })
})