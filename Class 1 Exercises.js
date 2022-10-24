/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const small = 13;
const large = 17;
const area13inch = Math.pi * Math.pow(small/2, 2);
const area17inch = Math.pi * Math.pow(large/2, 2);
// 2. What is the cost per square inch of each pizza?
const smallPrice = 16.99;
const largePrice = 19.99;

const pricepersquareinch13 = smallPrice/area13inch;
const pricepersqureinch17 = largePrice/area17inch;
// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)


// 4. Draw 3 cards and use Math to determine the highest
// card

function getRandomInt(max) {
    return (Math.floor(Math.random() * max)) + 1;
}

const firstDraw = getRandomInt(12);
const secondDraw = getRandomInt(12);
const thirdDraw = getRandomInt(12);

console.log(Math.max(firstDraw,secondDraw,thirdDraw));


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2020, 3, 1);
const startDate = new Date(2020,1,1);

const elapsedTime = endDate.valueOf() - startDate.valueOf();
const halfway = elapsedTime/2;

const middleTime = endDate.valueOf() - halfway;
const middleDate = new Date(middleTime).toUTCString();
console.log(middleDate);
