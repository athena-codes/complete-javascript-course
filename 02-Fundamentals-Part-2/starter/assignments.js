// Functions

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and it's capital city is
//     ${capitalCity}`
// }

// console.log(describeCountry('USA', 329.5, 'New York'))
// let finland = describeCountry('Finland', 6, 'Helinski')
// console.log(finland)
// let holland = describeCountry('Holland', 6.5, 'Amsterdam')
// console.log(holland)

// Function Declaration vs Expression

// function percentageOfWorld1(population) {
//     let percentOfPopulation = (population / 7900) * 100
//     return percentOfPopulation
// }

// let china = percentageOfWorld1(1441)
// console.log(china)
// let USA = percentageOfWorld1(329.5)
// console.log(USA)
// let Finland = percentageOfWorld1(6)
// console.log(Finland)


// const percentageOfWorld2 = function(population) {
//     let percentOfPopulation = (population / 7900) * 100
//     return percentOfPopulation
// }

// let china2 = percentageOfWorld2(1441)
// console.log(china2)



// Arrow Function

// const percentageOfWorld3 = (population) => {
//     let percentOfPopulation = (population / 7900) * 100
//     return percentOfPopulation
// }

// let china3 = percentageOfWorld3(1441)
// console.log(china3)



// // Helper Functions

// const describePopulation = (country, population) => {

//     const percentage = percentageOfWorld3(population)

//     return `${country} has ${population} million people, which is about
//      ${percentage} percent of the world`
// }

// let china4 = describePopulation('China', 1441)
// console.log(china4)

// let USA2 = describePopulation('USA', 329.5)
// let finland2 = describePopulation('Finland', 6)
// console.log(USA2)
// console.log(finland2)
