const profileDataArgs = process.argv.slice(2, process.argv.length)
console.log(profileDataArgs)

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i])
  }
}
console.log('=============')

const printProfileData = profileDataArr => {
profileDataArr.forEach((profileItem) => {
  console.log(profileItem);
})
}


printProfileData(profileDataArgs)

// const addNums = function(numOne, numTwo) {
//   return numOne + numTwo
// }
// const addNums = (numOne, numTwo) => {
//   return numOne + numTwo
// }
