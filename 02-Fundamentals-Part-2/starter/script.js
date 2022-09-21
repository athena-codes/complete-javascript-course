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





// Objects

// let athenaArr = [
//     'Athena',
//     'Chiarello',
//     2022 - 2000,
//     'student',
//     ["leo", "toby"]
// ]

// let athenaObj = {}

// athenaObj["firstName"] = athenaArr[0]
// athenaObj["lastName"] = athenaArr[1]
// athenaObj["age"] = athenaArr[2]
// athenaObj["job"] = athenaArr[3]
// athenaObj["pets"] = athenaArr[4]



//  console.log(athenaObj)


// let Athena = {
//     firstName: 'Athena',
//      lastName: 'Chiarello',
//      age: 22,
//      job: 'student',
//      pets: ["leo", "toby"] }

//      console.log(Athena.lastName)
//      console.log(Athena["age"])

//     //  const nameKey = "Name"
//     //  console.log(Athena["first" + nameKey])   // "firstName"
//     //  console.log(Athena["last" + nameKey])   // "lastName"

//      let fullName = Athena.firstName + " " + Athena.lastName
//      console.log(fullName)
//     //  Athena["fullName"] = fullName
//     //  Athena.fullName = fullName
//     Athena.location = "USA"           // assign new key value pair to obj
//      console.log(Athena)

//     // let interestedIn = prompt('What do you want to know about Athena? Choose between firstName, lastName, age, job and pets')

//     // if(Athena[interestedIn]) {
//     //   console.log(Athena[interestedIn])
//     // } else {
//     //     console.log("Not a valid option!")
//     // }


//     // Challenge
//      console.log(`${Athena.firstName} has ${Athena.pets.length} pets, and her favorite pet is ${Athena.pets[0]}`)

// let Athena = {
//     firstName: 'Athena',
//      lastName: 'Chiarello',
//      gender: 'female',
//      birthYear: 2000,
//      job: 'student',
//      pets: ["Leo", "Tobi"],
//     //  age: (birthYear) => {
//     //     return 2022 - birthYear
//     //  }
//     // age: function() {
//     //     // console.log(this)
//     //     return 2022 - this.birthYear
//     // }
//     calcAge: function () {
//         this.age = 2022 - this.birthYear
//         return this.age
//     }
// }
//     console.log(Athena.calcAge())
//     console.log(Athena)
//     console.log(Athena.age)
//     // console.log(Athena.age(Athena.birthYear))    // dot notation
//     // console.log(Athena['age'](Athena['birthYear']))  // bracket notation

//  let getSummary = (obj) => {

//     return `${obj.firstName} ${obj.lastName} is a ${obj.age} year old ${obj.gender} who is a ${obj.job},
//     and has ${obj.pets.length} pets named ${obj.pets[0]} and ${obj.pets[1]}`
//  }

//  console.log(getSummary(Athena))




// Iteration: the For loop

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`)
// }

// let athenaArr = [
//     'Athena',
//     'Chiarello',
//     2022 - 2000,
//     'student',
//     ["leo", "toby"]
// ]

// let printEles = (arr) => {
//   for(let i = 0; i < arr.length; i++) {
//     let ele = arr[i]
//     console.log(ele, typeof ele)
//   }
// }

// athenaArr.push("USA")
// printEles(athenaArr)
