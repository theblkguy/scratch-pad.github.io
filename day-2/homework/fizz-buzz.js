// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/**
 * I: Numbers 1 - 100
 * O: Printing each number
 * C: each multiple of 3 prints 'Fizz' instead of number, each multiple of 5 prints 'buzz'
 * multiples of 3 AND 5 prints 'FizzBuzz'
 * E:
 */

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    // initialize a for loop for numbers 1 - 100
    for (var i = 1; i <= 100; i++) {
        // if the remainder of i divided 15 is 0 print "FizzBuzz"
        if (i % 15 === 0) {
            console.log('FizzBuzz')
        // else if the remainder of i divided by 5 is 0 print 'Buzz'
        } else if (i % 5 === 0) {
            console.log('Buzz')
        // else if the remainder of i divided by 3 is 0 print 'Fizz'
        } else if (i % 3 === 0) {
            console.log('Fizz')
        // otherwise, log i
        } else {
            console.log(i)
        }
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}