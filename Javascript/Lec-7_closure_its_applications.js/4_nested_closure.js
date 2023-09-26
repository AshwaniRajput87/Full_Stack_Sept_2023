/***
 *   Nested closure:
 * 
 *      A nested closure means a function within a function.
 * 
 * 
 */

let iamGEC = 10;

function getFirstName(firstName) {
    console.log('I have got your first name');

    return function getLastName(lastName) {
       console.log('I have your last name');
       console.log('Hello GEC', iamGEC);
        
       return function greetMsg() {
        console.log(`Hello, ${firstName} ${lastName}`);
        console.log('Hi GEC, ', iamGEC);
       }
    }
}

const firstNameRtn = getFirstName('Madhav');

const lastNameRtn = firstNameRtn('Ponnaganti');

lastNameRtn();
