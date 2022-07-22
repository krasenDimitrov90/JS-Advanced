// Judge give me 50/100 

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

console.log(numberOperations.sumArrays(null));

describe("Tests …", function () {
    describe("Fn powNumber", function () {
        it("Test with 0", function () {
            expect(numberOperations.powNumber(0)).to.equal(0);
        });
        it("Test with 1", function () {
            expect(numberOperations.powNumber(1)).to.equal(1);
        });
        it("Test with 5", function () {
            expect(numberOperations.powNumber(5)).to.equal(25);
        });
        it("Test with -5", function () {
            expect(numberOperations.powNumber(-5)).to.equal(25);
        });
        it("Test with string number", function () {
            expect(numberOperations.powNumber('2')).to.equal(4);
        });
        it("Test with string text", function () {
            expect(numberOperations.powNumber('string')).to.be(NaN);
        });
        it("Test with object", function () {
            expect(numberOperations.powNumber({})).to.be(NaN);
        });
        it("Test with empty array", function () {
            expect(numberOperations.powNumber([])).to.equal(0);
        });
        it("Test with array one element", function () {
            expect(numberOperations.powNumber([4])).to.equal(16);
        });
        it("Test with array two element", function () {
            expect(numberOperations.powNumber([4,2])).to.be(NaN);
        });
        it("Test with null", function () {
            expect(numberOperations.powNumber(null)).to.equal(0);
        });
        it("Test with undefined", function () {
            expect(numberOperations.powNumber(undefined)).to.be(NaN);
        });
    });

    describe("Fn numberChecker", function () {
        it("Test with 0", function () {
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
        });
        it("Test with -5", function () {
            expect(numberOperations.numberChecker(-5)).to.equal('The number is lower than 100!');
        });
        it("Test with 99", function () {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
        });
        it("Test with string number - '1' ", function () {
            expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!');
        });
        it("Test with string number - 100 ", function () {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        });
        it("Test with string number - 500 ", function () {
            expect(numberOperations.numberChecker(500)).to.equal('The number is greater or equal to 100!');
        });
        it("Test with string text", function () {
            expect(numberOperations.numberChecker('text')).to.throw(new Error('The input is not a number!'));
        });
        it("Test with array of numbers", function () {
            expect(numberOperations.numberChecker([4,5])).to.throw(new Error('The input is not a number!'));
        });
        it("Test with object", function () {
            expect(numberOperations.numberChecker({})).to.throw(new Error('The input is not a number!'));
        });
    });

    describe("Fn sumArrays", function () {
        it("Test with array of numbers with equal length", function () {
            expect(numberOperations.sumArrays([1,2,3], [1,2,3])).to.equal([2,4,6]);
        });
        it("Test with first array length bigger", function () {
            expect(numberOperations.sumArrays([1,2,3,4,5], [1,2,3])).to.equal([2,4,6,4,5]);
        });
        it("Test with second array length bigger", function () {
            expect(numberOperations.sumArrays([1,2,3], [1,2,3,4,5])).to.equal([2,4,6,4,5]);
        });
        it("Test with string number", function () {
            expect(numberOperations.sumArrays(['1','2','3'], ['1','2','3'])).to.equal(['11','22','33']);
        });
    })
});


