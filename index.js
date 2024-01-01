// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let x = 0

// 2.) Change the value of this variable
x = 1
// 3.) Change the data type of this variable
x = "one"
// 4.) Create another variable and the one from above to concatenate
let y = "two"
console.log(y + x)
// 5.) Use any of the variables above or create new ones and print using string interpolation
console.log(`I currently have ${x} laptop`)
// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let person = 'Sabrina'
console.log(person.charAt(4))

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
let dude = 'Teddy'
let position = dude.charAt(2)
console.log(position)
//Unicode is a standard character set that numbers and defines characters from the world's different languages, writing systems, and symbols


// Using fromCharCode() - make it readable for us :). You'll see!
let charCode1 = 65
let charCode2 = 66  
let charCode3 = 67  

let resultString = String.fromCharCode(charCode1, charCode2, charCode3);

console.log(resultString)
// Take your first and last name and concat()
console.log('Henry' + ' Pena')
// Create a string and make it return true using startsWith()
let str = 'I am on winter break'
console.log(str.startsWith('I'))
// Now use any variable with endsWith() and return false
console.log(str.endsWith('break'))
// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, as the day faded away'
console.log(ozgur.includes('time'))

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
console.log(joshHadALittleLambOopsCow.indexOf('cow'))

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
console.log(vanessa.lastIndexOf('vanessa'))
// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
console.log(noWeCantTeo.length)

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
let Gokusreplacement = replaceGokuWithVegeta.replace('Goku', 'Vegeta')
console.log(Gokusreplacement)
// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
let newWife = joshIsLookingForWifey.search('wifey')
console.log(newWife)
// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
let otherHalf = pizzaSentence.slice(6, 26)
console.log(otherHalf)

// Now using the pizza sentence, return only pizza (before the comma)
let pizza = pizzaSentence.slice(0,5)
console.log(pizza)
// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
let split = splitTheBill.split(',')
console.log(split)
// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
let newSplit = splitTheBill.split('')
// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
const chill = angry.toLowerCase()
console.log(chill)
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
let Tuan = "I WANT A REFUND RIGHT NOW"
let Tchill = Tuan.toLowerCase()
// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
let bigJ = jahlunSaidToPutSomeRespectToHisName.toUpperCase()
// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
let greet = basicGreeting.substring(1,4)
console.log(greet)

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
let really = ohReally.substring(0,11)
console.log(really)
// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
let asl = aslDays.substring(15)
console.log(asl)
// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
const greeting = '   Hello world!   ';
console.log(greeting.trim());


// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b)
console.log(c > b)
console.log(d == d)
console.log(d != a)
console.log(a < 15)
console.log(a < b < c)
console.log(c > b > a != d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
let ken = "My room is spinning"
for (i = 0; i < 11; i++){
  console.log(ken)
}
// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
let harry = "20 spins"
for (i = 0; i < 21; i++){
  console.log(harry)
}
// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let apology = "im sorry teo"
i = 0
while (i < 21) {
  console.log(apology)
  i++
}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}
for (i in whateverQueenBeySaid) {
  console.log(i)
}
// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
for (i in lana) {
  console.log(i)
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
for (let i of tia) {
  console.log(i)
}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']
perscholas.forEach(function(i) {
  console.log(i)
})
// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push()
// pop()
// unshift()
// shift()
// concat()
// splice()
// slice()
// sort()
// includes()
// indexOf()
// length

const fruits = ['apple', 'banana', 'orange']

// Print banana
let banana = fruits[1]
console.log(banana)
// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
let string = fruits.join(' ')
console.log(string)
// Remove orange

// Add strawberry, kiwi, and grapes at the end
let newFruits = fruits.push('strawberry', 'kiwi', 'grapes')
console.log(fruits)
// Remove apple
fruits.shift()
console.log(fruits)
// Add mango at the beginning of the array
fruits.unshift('mango')
console.log(fruits)
// Add lemon, and grapefruit between mango and banana
fruits.splice(1, 0, "lemon", "grapefuit")
console.log(fruits)
// Remove banana and strawberry
fruits.splice(3,1)
console.log(fruits)
fruits.splice(4,1)
console.log(fruits)
// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
let exotic = ["star fruit", "limoncello", "dragon fruit"]

// Print the last two exotic fruits without altering the newly concatenated array.
console.log(exotic.slice(1))
// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
monalissaIsMessy.sort()
console.log(monalissaIsMessy)

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
function swears(words){
  return words !== "badword"
}
const NoBadWords = RafaelNoBadWords.split(" ").filter(swears).join(" ")
console.log(NoBadWords)
// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
const total = numbersToAddUp.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total)


// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
let OGarray = [1, 2, 3, 4]
let newA = [...OGarray]
// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
let firstA = [10, 20, 30]
let secondA = [40, 50, 60]
let combined = [...firstA, ...secondA]
console.log(combined)
// Using the variable with the newly connected arrays, use spread operator to add something at the end.
let fourthA = [...combined, 100]
console.log(fourthA)
// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
let fifthA = [-1, ...fourthA]
console.log(fifthA)
// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
console.log(donutShop[1][0][1])
// Tosi wants ihatethis. :) Print!

// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
let teo = 'person'
if (teo === 'person'){
  console.log('yup')
}
else {console.log('he is an alien')}
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
let T = 'male'
if (T === 'male'){
  console.log('he is a male')
}
else {console.log('female')}
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
let newT = 'I am not hungry'
if (newT === 'I am hungry'){
  console.log('Lets buy tacos')
}
else {console.log('If teo is not hungry, am I hungry')}
// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
let Gustavo = 'not the coolest'
if (Gustavo === 'the coolest'){
  console.log('you got that right')
}
else {console.log('James wants to argue. He says hes the best!')}

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreeting(){
  console.log('Hello, maamsir!')
}
sayGreeting()

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
function replace(string){
  console.log('This is my ' + string)
}
replace('house')
// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
function add1(x, y, z){
  console.log(x + y + z)
}
let num1 = 2
let num2 = 4
let num3 = 6
add1(num1, num2, num3)

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
function fightClub(name) {
  if (name === 'Teo') {
    return '1st rule: You do not talk about Fight Club.';
  }
  if (name === 'Manara') {
    return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.';
  }
  if (name === 'Liv') {
    return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.';
  }
  if (name === 'Devin') {
    return '4th rule: Only two guys to a fight.';
  }
  else return 'No shirts'}
// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
function hello() {
  return function bye() {
    console.log('Hello and goodbye');
  }
}
const goodbyeFunction = hello();
goodbyeFunction()

// Create a function expression with your first name as the variable and then print your first and last name

let Henry = function me(){
  console.log('Henry Pena')
}
Henry()
// Create an arrow function that accepts a number and have it return that number doubled
const double = (a) => (a * 2)
// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.
let human = {
  name: 'Henry', 
  age: 28,
  location: 'Boston'
}
// Access the name using dot notation
let him = human.name
console.log(him)
// Access the age using square brackets
let hisAge = (human['age'])
console.log(hisAge)
// Use object destructuring to access location
const { location } = human
// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
const overgrowAbility = bulbasaur.abilities[0].ability;
console.log(overgrowAbility); // Output: overgrow

// Print cut
const cutMove = bulbasaur.moves[2];
console.log(cutMove);

// Print Bulbahhhh!!!!!
bulbasaur.sound()

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7
// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur['order'] = 1;
// Print an array that contains every single properties in bulbasaur
const propertiesArray = Object.keys(bulbasaur);
console.log(propertiesArray)
// Print every single properties one by one in the console
for (const property in bulbasaur) {
  console.log(property);
}
// Print an array that contains every single values in bulbasaur
const valuesArray = Object.values(bulbasaur);
console.log(valuesArray)