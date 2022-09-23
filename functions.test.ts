const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE

    test('check to see if length is the same after running the function', () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        expect(arr.length).toBe(result.length)
    })

    test('return array with same items', () => {
        // create array
        // run through shuffle array function
        // Check to make sure all original values are included in new array

        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)

        expect(result).toEqual(expect.arrayContaining(arr))


        // let myVar = true

        // for(let i = 0; i < result.length; i++){
        //     if(arr.includes(result[i]) === false){
        //         myVar = false
        //         return
        //     }
        // }

        // expect(myVar).toBe(true)
    })
})