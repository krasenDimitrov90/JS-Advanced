const lookupChar = require('./03. Char Lookup');
const expect = require('chai').expect;

describe('Test fn lookupChar', () => {
    describe('Test with not string input', () => {
        it('Should return undefind', () => {
            expect(lookupChar(5,6)).to.equal(undefined);
        })
        it('Should return undefind', () => {
            expect(lookupChar({},6)).to.equal(undefined);
        })
        it('Should return undefind', () => {
            expect(lookupChar([1,2,3],6)).to.equal(undefined);
        })
    })
    describe('Test with not correct index',() => {
        it('Should return undefind', () => {
            expect(lookupChar('Hi',1.2)).to.equal(undefined);
        })
        it('Should return undefind', () => {
            expect(lookupChar('Hi',[1])).to.equal(undefined);
        })
        it('Should return undefind', () => {
            expect(lookupChar('Hi','1')).to.equal(undefined);
        })
        it('Should return Incorrect index', () => {
            expect(lookupChar('Hi',3)).to.equal('Incorrect index');
        })
        it('Should return Incorrect index', () => {
            expect(lookupChar('Hi',-1)).to.equal('Incorrect index');
        })
    })
    describe('Test with correct string and index [i]', () => {
        it('Should return', () => {
            expect(lookupChar('Hi',1)).to.equal('i');
        })
        it('Should return', () => {
            expect(lookupChar('Hi',0)).to.equal('H');
        })
    })
})