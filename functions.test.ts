const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Should return an array', () => {
        let shuffledArray = shuffleArray(shuffleArray.array)
        expect(typeof shuffledArray).toBe('array')
    })

    test('Should return Copy', () => {
        let shuffledArray = shuffleArray(shuffleArray.arrCopy)
        expect(shuffledArray).toBe('arrCopy')
    })

})