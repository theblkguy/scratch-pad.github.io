// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

/**
 * I: An Array
 * O: Array values printed to the console
 * C: N/A
 * E: N/A
 */

function printArrayValues(array) {
  // YOUR CODE BELOW HERE //

    // initialize for loop
    // start index at 0
    // while the index is less than or equal to the array length
    // iterate the index by 1
  for (var i = 0; i <= array.length - 1; i++) {
    // log current array index to console
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

/**
 * I: An Array
 * O: Array values printed to in reverse
 * C: N/A
 * E: N/A
 */

function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //

    // initialize for loop
    // start index at the end of the loop
    // end when the index reaches 0
    // decrement by 1
  for (var i = array.length - 1; i >= 0; i--) {
    // log current array index to the console
    console.log(array[i]);
  } 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

/**
 * I: An object containing values 
 * O: An array containing the object kets
 * C: N/A
 * E: N/A
 * */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //

    // Initializing a container variable with array literal
    var keysArr = [];
    // Iterating over the keys in the object
  for (var key in object) {
    // Push keys to container array
    keysArr.push(key)
  }
    // return new array containing object keys
return keysArr;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

/**
 * I: An object containing values 
 * O: Object keys printed to the console
 * C: N/A
 * E: N/A
 * */



function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //

    // Iterate through object
  for (var key in object){
    // print each key to console
    console.log(key)
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

/**
 * I: An object
 * O: An array containing values from the object
 * C:
 * E: 
 * */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
    // initialize a container variable with array literal
    var output = [];
    // iterate through object
  for (var key in object){
    // push each value into the array
    output.push(object[key])
  }
    //return output array
return output
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

/**
 * I: An Object
 * O: Object values printed to console
 * C:
 * E:
 */

function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
    
    // loop through the object
  for (var key in object) {
    // log the keys of object to console
    console.log(object[key])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

/**
 * I: An object
 * O: The NUMBER of key/value pairs in the given object
 * C:
 * E:
 *
 */

function getObjectLength(object) {
  // YOUR CODE BELOW HERE //

    // initializing a variable with array literal
    var countArr = []
    // looping over object
    for (var key in object) {
    // push keys to container array
      countArr.push(key)
    }
    // Return the length of the container array
  return countArr.length
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

/**
 * I: an Object
 * O: The values of the object printed in reverse
 * C:
 * E: 
 * */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //

    // Initialize a variable with array literal
    var refArr = [];
    // Loop through the object
    for (var key in object) {
      // unshift values into container array
      refArr.unshift(object[key])
    }
    // Loop through container array
    for (var i = 0; i < refArr.length; i++){
    // print container array values to console
      console.log(refArr[i])
    }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}