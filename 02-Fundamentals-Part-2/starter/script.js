// Strict Mode

'use strict'

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true
// if(hasDriversLicense) console.log('I can drive')


// //Reserved words

// // const interface = 'Audio'
// // const private = 534
// // const if = 23


// // Functions

// function logger() {
//     console.log('My name is Athena')
// }

// // calling / running / invoking the function
// logger()
// logger()
// logger()

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)
// console.log(fruitProcessor(5, 0))

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)


// Function Declaration

// function calcAge1(birthYear) {
//     const age = 2022 - birthYear
//     return age
// }

// const age1 = calcAge1(2000)
// console.log(age1)

// // Function Expression

// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear
// }

// const age2 = calcAge2(2000)
// console.log(age2)




// Arrow Function

// const calcAge3 = birthYear => 2022 - birthYear
// const age3 = calcAge3(2000)
// console.log(age3)


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear
//     const retirement = 65 - age
//     // return retirement
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(2000, 'Athena'))



 // Helper Functions

// const cutFruitPieces = function(fruit) {
//     return fruit * 4
// }

// const fruitProcessor = function(apples, oranges) {

//    const applePieces = cutFruitPieces(apples)
//    const orangePieces = cutFruitPieces(oranges)

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces}
//     pieces of oranges`
//     return juice
// }

// console.log(fruitProcessor(2, 3))

// don't repeat yourself, easier to alter code with helper functions


// Helper Functions

// const calcAge = birthYear => 2022 - birthYear


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age= calcAge(birthYear)
//     const retirement = 65 - age

//    if (retirement > 0) {
//        console.log(`${firstName} retires in ${retirement} years.`)
//        return retirement
//     } else {
//        console.log(`${firstName} has already retired!`)
//        return -1
//    }

// }

// console.log(yearsUntilRetirement(2000, 'Athena'))
// console.log(yearsUntilRetirement(1944, 'Joe'))





// Array Methods

