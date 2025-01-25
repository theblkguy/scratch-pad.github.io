// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

/**
 * I: ID, first name, last name
 * O: a contact object containing given arguments
 * C: N/A
 * E: N/A
 * */
// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // Initialize container variable with object literal
    var contact = {};
    contact['id'] = id;
    contact['nameFirst'] = nameFirst;
    contact['nameLast'] = nameLast;

    return contact
}

   
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
       length: function(){
        return contacts.length
       },
       /*
       I: Takes in contact object
       O: Add object to contact list
       C: N/A
       E: N/A
       */
      addContact: function(contact){
        return contacts.push(contact)
    },
     /*
       I: Takes in a full-name string
       O: returns the contact if found in contact-list, else return undefined
       C: N/A
       E: N/A
       */
      findContact: function(fullName){
        var firstLast = fullName.split(' ')
        for (var i = 0; i < contacts.length; i++) {
          if(contacts[i]['nameFirst'].includes(firstLast[0]) && contacts[i]['nameLast'].includes(firstLast[1])){
            return contacts[i];
          } else {
            return undefined
          }
        }

        },
        removeContact: function(contact){
          for (var i = 0; i < contacts.length; i++) {
            if (contact.includes(contacts[i]['nameFirst'] && contact.includes(contacts[i]['nameLast'] && contact.includes(contacts[i[id]])))) {
              return contacts.splice(contacts[i])
            } else {
              return undefined
            }
          }
      }
    }
  }


  

  
      



makeContactList(); // => { length: function(){}, addContact: function(){}, findContact: function(){}  }



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}