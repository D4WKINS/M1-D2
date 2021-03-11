// ALGORITHM is a finite set of steps for solving a particular problem



// DATA TYPES



// NUMBERS

// 5

// 5.5

// 10.4563534345



// STRINGS

// "hello strivers"

// "hello strivers' lesson"

// `hello strivers`



// BOOLEANS

// true

// false

// 3 > 2 -> true

// 2 > 3 -> false

// 3 === 3 -> true

// 'kostas' === 'stefano' -> false

// 3 === '3' -> false



// SPECIAL ONES

// undefined --> absence of value

// null --> not existing



// VARIABLES

// they are containers for values



let myVariable = 10

let anotherVariable = 'maximilian'

let sumBetweenTwoNumbers = 5 + myVariable

// this notation is called camelCase



// sumBetweenTwoNumbers is 15

console.log(myVariable)

console.log(sumBetweenTwoNumbers)



let subtraction = (myVariable - 5)

let division = (myVariable / 5)

let modulo = (myVariable % 5) // the remaining of the division! in this case 0

console.log(subtraction)

console.log(division)

console.log(modulo)



let withParentheses = (myVariable - 5) + 3

console.log(withParentheses)



let myString = 'hello strive!'

let myNumber = 100

myNumber = 50



let myBool = true

let myAnotherBool = 30 > 50





console.log(myNumber + '10')



let thisIsNotANumber = '100'

let thisIsANumber = 50



console.log(thisIsANumber + thisIsNotANumber) // this will concatenate them

console.log(thisIsANumber + parseInt('50')) // this will add them up

console.log(thisIsANumber + parseInt(true)) // this will result to NaN



console.log('my age is ' + 33)



console.log(30 == '30') // check just value and not the type, NOT VERY USED

console.log(30 === '30') // check just value and the type



// LOGIC OPERATORS

// && ||

// && -> AND

// || -> OR

console.log('-------------')

console.log(true && 30 < 50) // --> RETURNS TRUE

// AND WILL RETURN TRUE JUST IF EVERY PIECE OF THE EXPRESSION IS TRUE

// IF THE FIRST MEMBER IS FALSE, THE SECOND MEMBER IS FALSE OR BOTH OF THEM ARE FALSE

// IT WILL RETURN FALSE

console.log(true && 30 > 50) // --> RETURNS FALSE

console.log(30 > 50 && true) // --> RETURNS FALSE



console.log(true || 30 > 50) // --> RETURNS TRUE

console.log(true || 30 < 50) // --> RETURNS TRUE

console.log(false || 30 > 50) // --> RETURNS FALSE



// OR WILL RETURN TRUE IF ONE PIECE OF THE EXPRESSION IS TRUE

console.log(false || 30 > 50)



console.log(30 >= 30)



console.log(30 !== 30)



console.log(true)

console.log(!true)



let striveString = 'hello strive!'

let striveStringUpperCase = striveString.toUpperCase()

let backToTheOriginalForm = striveStringUpperCase.toLowerCase()



console.log(backToTheOriginalForm)



// CONDITIONS

// if/else



let newUser = "Stefano"

let counter = 0



if (newUser === "Stefano") {

    console.log('Welcome! 20% off on the whole cart')

    counter = 5

    // whatever you want here

} else if (newUser === "Ingrid") {

    console.log('Welcome! 40% off on the whole cart')

    counter = 10

} else {

    console.log('no discount for you')

}



console.log(counter)