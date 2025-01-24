// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

/**
 * I: a base test that could be a STRING or a NUMBER
 * O: A function that tests whether a given value is greater than the base
 * C:
 * E:
 *  */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //

    return function(val) {
        return val > base
    }
   
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */

function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(val){
        return val < base;
    }
  
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */

/**
 * I: A single character
 * O: A function that tests a given string for the given character
 * C: N/A
 * E: N/A
 * */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

    return function(str) {
        return str[0].toLowerCase() === startsWith.toLowerCase();
    }

    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    

    return function(str) {
        return str[str.length - 1].toLowerCase() === endsWith.toLowerCase();
    }


    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */

/**
 * I: An ARRAY of strings and a modify FUNCTION
 * O: An ARRAY of the strings, modified
 * C:
 * E:
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // create a container array for the modified strings
    var modStr = [];
    // start a for loop to iterate over the strings array
    for (var i = 0; i < strings.length; i++) {
    // push result of modify function with current array index as an argument
        modStr.push(modify(strings[i]))
        console.log(modStr);
    }

    return modStr
    
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */

/**
 * I: an ARRAY of strings and a FUNCTION to test the string, 
 * O: return true or false 
 * C: return true if ALL strings pass
 * E: N/A.
 * 
 * .
 * 
 * */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //

    // Initialize a container for boolean result
    var result = null

    // start a loop to iterate through the array
    for (var i = 0; i < strings.length - 1; i++) {
        // if the current index of the test passes the test reassign result to true
        if (test(strings[i]) === true) {
            result = true
            // otherwise, reassign result to false
        } else {
            result = false
        }
    }
    // return result
    return result
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}