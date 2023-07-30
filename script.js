// Fizz Buzz Game
// for(let i = 0; i<=100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i + ' fizz buzz')
//     }else if(i%5===0){
//         console.log(i +' buzz')
//     }else if(i%3===0){
//         console.log(i+' fizz')
//     }else{
//         console.log(i + ' not divisible by 3 and 5')
//     }
// }

// function to print contents in the current window
// const printWindow = ()=>{
//     window.print()
// }

// Get the current date in either of this format mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy .  
// const today = new Date()
// const day = today.getDate()
// const month = today.getMonth() +1
// const year = today.getFullYear()

// if(day<10){
//     var dd = `0${day}`
// }else{
//     var dd = day
// }
// if(month<10){
//     var mm = `0${month}`
// }else{
//     var mm = month
// }
// const currentDate = `${dd}/${mm}/${year}`
// console.log(currentDate)

// Reverse a string
// const string = 'hello world'
// const reversedString = string.split('').reverse().join('')
// console.log(reversedString)

//Find out if 1st January will be a Sunday between 2014 and 2050.
// for(let year = 2014; year<=2050; year++){
//     let y = new Date(year, 0, 1) //The Date Object takes 3 arguments : year, month, day
//     if(y.getDay()===0){
//         console.log(`${year} begins with sunday`)
//     }
// };