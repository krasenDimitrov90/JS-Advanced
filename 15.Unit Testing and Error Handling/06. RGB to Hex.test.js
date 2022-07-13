const rgbToHexColor = require('./06. RGB to Hex');
const expect = require('chai').expect;

describe('Test function rgbToHexColor', () => {
    describe('test with valid numbers', () => {
        it('Test with rgbToHexColor(222,123,204)', () => {
            expect(rgbToHexColor(222,123,204)).to.equal('#DE7BCC')
        })
        it('Test with rgbToHexColor(255,255,255)', () => {
            expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF')
        })
        it('Test with rgbToHexColor(0,0,0)', () => {
            expect(rgbToHexColor(0,0,0)).to.equal('#000000')
        })
    })
    
    describe('Test with values out of range', () => {
        it('Test with rgbToHexColor(222,123,256)', () => {
            expect(rgbToHexColor(222,123,256)).to.equal(undefined)
        })
        it('Test with rgbToHexColor(222,-1,255)', () => {
            expect(rgbToHexColor(222,-1,255)).to.equal(undefined)
        })
        it('Test with rgbToHexColor(-2,123,255)', () => {
            expect(rgbToHexColor(-2,123,255)).to.equal(undefined)
        })
        it('Test with rgbToHexColor(-2,-1,256)', () => {
            expect(rgbToHexColor(-2,-1,256)).to.equal(undefined)
        })
    })
})