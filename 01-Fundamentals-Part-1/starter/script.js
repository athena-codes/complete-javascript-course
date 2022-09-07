// Variable name conventions

/* let js = 'amazing'
console.log(40 + 8 + 23 - 10)

console.log('Athena')

let firstName = 'Athena'
console.log(firstName)
*/




// Data Types

/* let javascriptIsFun = true
console.log(javascriptIsFun)

console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 23)
console.log(typeof 'Athena')

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun)

let year;
console.log(year)
console.log(typeof year)

year = 2022
console.log(year)
console.log(typeof year)

console.log(typeof null)  // bug in javascript */





// Let, const and var

// let age = 21
// age = 22     // reassigning/mutating variable

// const birthYear = 2000  // const can not be mutated

// var job = 'programmer'
// job = 'developer'

// lastName = 'Chiarello'  // global variable, don't declare like this ever
// console.log(lastName)





// Coding Challenge #1

// let markMass = 78
// let markHeight = 1.69

// let johnMass = 92
// let johnHeight = 1.95

// let markBMI = markMass / (markHeight ** 2)
// let johnBMI = johnMass / (johnHeight ** 2)

// console.log(markBMI)
// console.log(johnBMI)

// let markHigherBMI = markBMI > johnBMI

// console.log(markHigherBMI)





// Template Literals

// const firstName = 'Athena'
// const job = 'programmer'
// const birthYear = 2000
// const year = 2022

// const athena = "I'm " + firstName + ", a " + (year -
//     birthYear) + " year old " + job + "!"
// console.log(athena)

// athenaNew = `I'm ${firstName} a ${year -
//      birthYear} year old ${job}!`
// console.log(athenaNew)

// console.log(`Just a regular string.`) // using backticks

// console.log('String with \n\
// multiple \n\
// lines') // multi-line using \n\

// console.log(`String
// multiple
// lines`) // multi-line using backticks





// If / Else Statements

// let age = 15
// let isOldEnough = age >= 16

// if (isOldEnough) {
//   console.log('Sarah can start driving license 🚗')
// }
// else {
//   let yearsLeft = 16 - age
//   console.log(`Sarah is too young. Wait another ${yearsLeft}
//   years.`)
// }





// Coding Challenge #2

// let markMass = 78
// let markHeight = 1.69

// let johnMass = 92
// let johnHeight = 1.95

// let markBMI = markMass / (markHeight ** 2)
// let johnBMI = johnMass / (johnHeight ** 2)

// if (markBMI > johnBMI){
//   console.log(`Mark's BMI ${markBMI} is higher than John's
//   BMI ${johnBMI}!`)
// } else {
//   console.log(`Johns BMI ${johnBMI} is higher than Mark's
//   BMI ${markBMI}!`)
// }




// Type Conversion

// let inputYear = '2000'
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18)

// console.log(Number('athena'))
// console.log(typeof NaN)

// console.log(String(21), 21)





// Type Coercion

// console.log('I am ' + 21 + ' years old.')
// console.log('23' - '10' - 3) // converts strings to nums
// console.log('23' + '10' + 3) // does not convert
// console.log('23' * '2') // converts
// console.log('23' / '2') // converts

// let n = '1' + 1 // 11
// n = n - 1  // 11 - 1
// console.log(n) // 10

// let n2 = 2 + 3 +  4 + '5' // adds numbers (9) + 5 string
// console.log(n2) // = 95

// let n3 = '10' - '4' - '3' - 2 + '5'
// console.log(n3)





// Truth and Falsy

// 5 falsy values: 0, '', undefined, null, NaN (also false)
// Anything else is true

// console.log(Boolean(0))  // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean('Athena')) // true
// console.log(Boolean({})) // true
// console.log(Boolean('')) // false

// let money = 100
// if (money) {
//     console.log("Don't spend it all ;)")
// } else {
//     console.log("You should get a job!")
// }


// let height = 0
// if (height){
//     console.log("YAY! Height is defined")
// } else {
//     console.log("Height is undefined")
// }





// Equality Operators

// let age = '18'
// if (age === 18) console.log('You just became an adult (strict)')

// if (age == 18) console.log('You just became an adult (loose)')

// let fav = Number(prompt("What's your favorite number?"))
// console.log(fav)
// console.log(typeof fav)

// if (fav === 22) { // works bc number type conversion above
//     console.log('Cool! 22 is an amazing number.')
// } else if (fav === 7) {
//     console.log("7 is also a cool number")
// } else (
//     console.log("Number is not 23 or 7")
// )

// if (fav !== 22) {
//     console.log("Why not 22 :(")
// }





// Coding Challenge #3

// let dolphinsAvg = (96 + 108 + 89) / 3
// let koalasAvg = (88 + 91 + 110) / 3   // min score not met

// let dolphinsAvg = (97 + 112 + 101) / 3
// let koalasAvg = (109 + 95 + 123) / 3  // koalas win

// let dolphinsAvg = (97 + 112 + 101) / 3
// let koalasAvg = (109 + 95 + 106) / 3  // It's a tie


// if ((dolphinsAvg < 100) || (koalasAvg < 100)) {
//     console.log("Minimum score required is 100")
// }
// else if (dolphinsAvg > koalasAvg) {
//     console.log(`Dolphin's win with ${dolphinsAvg} points!`)
// } else if (dolphinsAvg < koalasAvg) {
//     console.log(`Koala's win with ${koalasAvg} points!`)
// } else if (dolphinsAvg === koalasAvg) {
//     console.log("It's a tie!")
// }




// The Switch Statement

// let day = 'Sunday'

// switch(day) {
//   case 'Monday':  // day === 'Monday'
//     console.log('Plan course structure')
//     console.log('Go to coding meetup')
//     break
//   case 'Tuesday':
//     console.log('Preparing theory videos')
//     break
//   case 'Wednseday':
//   case 'Thursday':
//     console.log('Write code examples')
//     break
//   case 'Friday':
//     console.log('Record videos')
//     break
//   case 'Saturday':
//   case 'Sunday':
//     console.log('Enjoy the weekend')
//     break
// default:
//     console.log('Not a valid day!')
// }

// Switch w/ if and else statements

// if (day === 'Monday') {
//     console.log('Plan course structure')
//     console.log('Go to coding meetup')
// } else if (day === 'Tuesday') {
//     console.log('Preparing theory videos')
// } else if (day === 'Wednseday' || day === 'Thursday') {
//     console.log('Write code examples')
// } else if (day === 'Friday') {
//     console.log('Record videos')
// } else if (day === 'Saturday' || day === 'Sunday') {
//     console.log('Enjoy the weekend')
// } else {
//     console.log('Not a valid day!')
// }


// Conditional (ternary) Operator

// let age = 21
// // age >= 21 ?console.log('I can drink wine 🍷') :
// //   console.log('I like to drink water 💦')

// let drink = age >= 21 ? 'wine' : 'water'
// console.log(drink)         // same as if/else statement below

// let drink2;
//  if (age >= 21) {
//     drink2 = 'wine'
//  } else {
//     drink2 = 'water'
//  }

// console.log(drink2)

// console.log(`I like to drink ${drink}`)   // using ternary operator in template literal
// console.log(`I like to drink ${age >= 21 ? 'wine' : 'water'}`) // same as above, not using variable but code inside varibale





// Coding Challenge #4

let tip;
// let bill = 275
// let bill = 40
let bill = 430

tip = (bill <= 300) || (bill >= 50) ?(tip = bill * .15) : tip = bill * .2

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was
${bill + tip}`)
