
// Coding Challenge #1


/* Each team competes 3 times, and then the average of the 3 scores is
calculated(so one average score per team).
A team only wins if it has at least double the average score of the other
 team.Otherwise, no team win */

//  let calcAverage = ((score1, score2, score3) => {
//     let avg = (score1 + score2 + score3) / 3
//     return avg
//  })

//  let scoreDolphins = calcAverage(44, 23, 71)
//  let scoreKoalas = calcAverage(65, 54, 49)
//  console.log(scoreDolphins, scoreKoalas)

//  let checkWinner = ((avgDolphins, avgKoalas) => {

//       if (avgDolphins >= 2 * avgKoalas) {
//         console.log("Dolphins win!")
//       } else if (avgKoalas >= 2 * avgKoalas) {
//          console.log("Koalas win!")
//     } else {
//         console.log("No team wins.")
//     }
//  })

// checkWinner(scoreDolphins, scoreKoalas)


// //  console.log(calcAverage(44, 23, 71))



// Coding Challenge #2

// const calcTip = (bill) => {

//     return (bill >= 50 && bill <= 300 ? bill * .15 : bill * .2).toFixed(2)
// }


// const bills = [125, 554, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totals)




// Coding Challenge #3

// const mark = {
//     fullName: "Mark Miller",
//     weight: 78,
//     height: 1.69,
//     calcBMI: function () {
//         mark.bmi = mark.weight / mark.heigth ** 2
//         return mark.bmi
//     }
// }

// let john = {
//     fullName: "John Smith",
//     weight: 92,
//     height: 1.95,
//     calcBMI: function () {
//        this.bmi = this.weight / this.heigth ** 2
//        return this.bmi
//     }
// }

// mark.calcBMI()
// john.calcBMI()

// console.log(mark.bmi, john.bmi)



// Coding Challenge #4

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let totals = []
let tips = []


const calcTip = (bill) => {
    let tip = (bill >= 50 && bill <= 300 ? bill * .15 : bill * .2)
    return tip
}

const calcTipLoop = (arr) => {
    for(let i = 0; i < arr.length; i++) {
       let tip = calcTip(arr[i])
       tips.push(tip)
       totals.push(tip + arr[i])
    }
    return totals
}

console.log(calcTipLoop(bills))
