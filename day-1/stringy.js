// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/**
 * I: A string
 * O: Length of the given string
 * C: N/A
 * E: N/A
 */

function length(string) {
    // YOUR CODE BELOW HERE //
    
    // return string length
    return string.length;
    
    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to lowercase.
 */

/**
 * I: A string
 * O: The given string in lowercase
 * C: N/A
 * E: N/A
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    // use toLowerCase method and return result
    return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/**
 * I: A string
 * O: The given string in UPPERCASE
 * C: N/A
 * E: N/A
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

     // use toUpperCase method and return result
     return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

/**
 * I: A string
 * O: The given string in dash-case
 * C: N/A
 * E: N/A
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

    // Initialize variable with string in dash-case
    var strDash = string.replace(/ /g, '-');
    // return new string in all lowercase
    return strDash.toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/**
 * I: A string and a single character
 * O: return TRUE if string begins with character, FALSE otherwise
 * C: Function is case insensitive
 * E: N/A
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    // Initialzing container variables for input parameters to match case
    var globalStr = string.toLowerCase();
    var globalChar = char.toLowerCase();
    // Compare first letter of string to single character
    // If they match return true
    // else return false
    return globalStr[0] === globalChar
    ? true
    : false
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/**
 * I: A string and a single character
 * O: return TRUE if string ends with character, FALSE otherwise
 * C: Function is case insensitive
 * E: N/A
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

    // Initialzing container variables for input parameters to match case
    var endStr = string.toLowerCase();
    var endChar = char.toLowerCase();
    // Compare last letter of string to single character
    // If they match return true
    // else return false
    return endStr[endStr.length - 1] === endChar
    ? true
    : false
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/**
 * I: Two strings
 * O: The two given strings concatenated into one
 * C: N/A
 * E: N/A
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // Concatenate the two strings and return the result
    return stringOne += stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

/**
 * I: Any number of strings
 * O: All of the strings joiend together
 * C: N/A
 * E: N/A
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    var args = Array.from(arguments);
    // Use join method on arguments and return the result
    return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

/**
 * I: Two strings
 * O: The longest of the two
 * C: N/A
 * E: N/A
 * */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // If the first string is longer than the second, return the first string
    // else, return the second string
    return stringOne.length > stringTwo.length
    ? stringOne
    : stringTwo


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/**
 * I: Two strings 
 * O: 1 if the first string is earlier in the alphabet than the second, -1 if the second is higher than the first, and 0 if equal
 * C: N/A
 * E: N/A
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // If the first string is earlier in the alphabet return 1
    // else if the second string is earlier return -1
    // if they're equal return 0
    return stringOne < stringTwo ? 1
    : stringTwo < stringOne ? -1
    : 0

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}