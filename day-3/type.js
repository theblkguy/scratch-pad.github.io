// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */

/**
 * I: An input value
 * O: If the value is an array return true
 * C: N/A
 * E: N/A
 *  
 * */
function isArray(value) {
    // YOUR CODE BELOW HERE //

    // Check if value is an array and return result
    return Array.isArray(value)
    
    
    
    // YOUR CODE ABOVE HERE //
}

    var arrTest = isArray()

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */

/**
 * I: An input value
 * O: Return true if given value is an OBJECT as a collection, false otherwise
 * C: N/A
 * E: N/A
 * 
 * */

function isObject(value) {
    // YOUR CODE BELOW HERE //
    var result

    if (!Array.isArray(value) 
    && (value !== null) 
    && (value instanceof Date === false) 
    && (typeof value === 'object')) {
        result = true
    } else {
        result = false
    }

    return result 
    // YOUR CODE ABOVE HERE //
}

var objTest = isObject()

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    var result

    if (!Array.isArray(value) 
    && (value !== null) 
    && (value instanceof Date === false) 
    && (typeof value === 'object') || 
    (Array.isArray(value) 
    && (value !== null) 
    && (value instanceof Date === false) 
    && (typeof value === 'object'))
    ) {
        result = true

    } else {
        result = false
    }

    return result   
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 

/**
 * I: A value
 * O: return the type of value as a string
 * C:
 * E: 
 * */
function typeOf(value) {
    // YOUR CODE BELOW HERE //

    var result = '';

    if (typeof value === 'string'){
        result = 'string';
    } else if (isArray(value) === true) {
        result = 'array';
    } else if (isObject === true) {
        result = 'object';
    } else if (typeof value === 'undefined') {
        result = 'undefined';
    } else if (typeof value === 'number') {
        result = 'number';
    } else if (typeof value === 'number') {
        result = 'number';
    } else if (typeof value === 'boolean') {
        result = 'boolean';
    } else if (isObject(value) === false && typeof value === 'object' && value instanceof Date === false) {
        result = 'null';
    } else if (typeof value === 'function') {
        result = 'function';
    } else if (value instanceof Date === true) {
        result = 'date';
    }

    return result

    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}