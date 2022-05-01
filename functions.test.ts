const {shuffleArray} = require('./utils')


let testArr = [1,2,3,4,5]

describe('shuffleArray should', () => {
    test('Should return an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    })

    test('Make sure all the same items are in the array', () => {
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr))
    })

})