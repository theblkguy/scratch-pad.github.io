// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */

/**
 * I: Two intergers
 * O: an array containing all intergers between the two parameters, inclusively. if 
 * first arugment is greater than the second, return the range in reverse order
 * C:
 * E:
 * 
 *  */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    // initialize a variable with empty array as a container for result
    var rangeArr = [];
    if (start < end) {
        while (start <= end) {
            rangeArr.push(start)
            start++
        }
    } else if (start > end) {
        while (start >= end) {
            rangeArr.push(start)
            start--
        }
    }
    
    return rangeArr
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}