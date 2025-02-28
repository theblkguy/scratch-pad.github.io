// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

/**
 * I: A string
 * O: A new string of the original string in reverse
 * C: N/A
 * E: N/A
 */
function reverseString(input) {
  // YOUR CODE GOES BELOW HERE //
    // Initialize a variable as an empty string to hold result of input reversed
  var revStr = ''
    // Initialize a for loop to iterate through input string in reverse
  for (var i = input.length - 1; i >= 0; i--) {
    // Add each letter at given index to container variable
    revStr += input[i]
  }
  return revStr
  
  // YOUR CODE GOES ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}