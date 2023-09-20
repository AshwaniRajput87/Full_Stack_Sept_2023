/***
 *   default parameter:
 *     -> it was introduced in ES6
 *     -> Assinging the defalut values to the function parameters
 */

const calculateAreaOfRectangle = (w, h=0) => {
    return w * h;
}

console.log(calculateAreaOfRectangle(10, 20)); // 200

console.log(calculateAreaOfRectangle(10)); // 10 * undefined = NaN

console.log(calculateAreaOfRectangle(10)); // height(h) = 0,  10 * 0 = 0

console.log(calculateAreaOfRectangle(10, 30));


/****
 *   Flatten an object:
 *     -> const nestedObj = {
 *           person: {
                name: 'Ashwin',
                age:32,
                address: {
                    streetNo: 'B-40',
                    city: 'Delhi',
                    country: 'India',
                }
                address: null
            },
            hobbies: ['R&D', 'Teaching', 'Reading'],
            isActive: true
        }

        -> {
             "person.name": "Ashwin",
             "person.age": 32,
             "person.address.streetNo": "B-40"
             "person.address.city": "Delhi"
             "person.address.country": "India",
             "hobbies.0": 'R&D',
             "hobbies.1": 'Teaching',
             "hobbies.2": 'Reading',
             "isActive": true
           }
 * 
 */


    const flattenObject = (obj, delimeter='.', parentKey='') => {

        const flattened = {}; 
        
         for(let key in obj) {
            if(Object.prototype.hasOwnProperty.call(obj, key)) {
                const newKey =  parentKey ? `${parentKey}${delimeter}${key}` : key;
                                            // person.name

                if(typeof obj[key] === 'object' && obj[key] !== null) {
                    Object.assign(flattened, flattenObject(obj[key], delimeter, newKey));
                } else {
                    flattened[newKey] = obj[key];
                }
            }
         }
        return flattened;
    }

    const nestedObj = {
        person: {
                name: 'Ashwin',
                age:32,
                address: {
                    streetNo: 'B-40',
                    city: 'Delhi',
                    country: 'India',
                }
        },
        hobbies: ['R&D', 'Teaching', 'Reading'],
        isActive: true
    }
    
    console.log(flattenObject(nestedObj));



    // doubt session

    // {
    //     person: {
    //         name: 'Ashwin',
    //         age:32,
    //     },
    //     hobbies: ['R&D', 'Teaching', 'Reading'],
    //     isActive: true
    // }
    // {
    //     name: 'Ashwin',
    //     age:32,
    // }

    // const nestedObj1 = nestedObj;

    // nestedObj1.destination = 'London'
    

    // console.log(flattenObject(nestedObj1));
    // console.log(flattenObject(nestedObj));