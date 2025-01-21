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
    // Intitialzing a variable with 0 as a container
    var n = 0;
    // Initializing a while loop
    while (n <= 100) {
        if (n % 3 === 0 && n % 5 === 0) {
            console.log('FizzBuzz')
        } else if (n % 3 === 0 && n % 5 ==! 0) {
            console.log('Fizz')
        } else if (n % 5 === 0 && n % 3 ==! 0) {
            console.log('Buzz')
        } else {
            console.log(n);
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