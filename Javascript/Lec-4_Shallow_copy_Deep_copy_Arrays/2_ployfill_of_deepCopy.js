/***
 *  Polyfill of deepCopy:
 *  =====================
 *   Algo:
 *   -----
 *     1. Take a nested object (obj)
 *     2. Check if obj is primitive value or null.
 *     3. Create an empty array or object based on the type of object.
 *     4. Iterate over all properties of an object(obj)
 *     5.   check the obj has own properties ot not 
 *     6.   Recursively call the deepCopy on the property value and assign it to copied object.
 *     7. return a deep copy of a nested object 
 */

// Implementing the polyfill of deepCopy/deepClone

const deepCopy = (nestedObj) => {
    
     if(typeof nestedObj !== 'object' || nestedObj === null) {
        return nestedObj;
     }

     const copy = Array.isArray(nestedObj) ? [] : {};

     for(let key in nestedObj) {
        if(Object.prototype.hasOwnProperty.call(nestedObj, key)) {
            copy[key] = deepCopy(nestedObj[key]);
        }
     }

    return copy;
}

const persons = [
    {
    name: 'Ashwin',
    age:32,
    address: {
        streetNo: 'B-40',
        city: 'Delhi',
        country: 'India',
    }
},

{
    name: 'Hemant',
    age:32,
    address: {
        streetNo: 'A-40',
        city: 'Banglore',
        country: 'India',
    }
}
];

const person = {
    name: 'Ashwin',
    age:32,
    address: {
        streetNo: 'B-40',
        city: 'Delhi',
        country: 'India',
        // data: {
        //    x: 10,
        //    y: 20,
        // }
    }
}

const person1 = deepCopy(person);

person1.address.city = 'Banglore';


console.log(person1);

console.log(person);
