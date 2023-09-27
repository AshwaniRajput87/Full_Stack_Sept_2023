/**
 *  Mutable object -> that can be changed.
 *  Immutable Object -> that can't be changed.
 *     -> In JS:
 *          1. Object.seal(): prevents to add and remove properties in an object, but you will able to modify the value of an existing object.
 *          2. Object.freeze(): prevents you to add, remove and update the properties value in an existing object.
 */

const dbConfig = {
    appName: 'scaler.com',
    database: {
        host: '127.0.0.1',
        port: '3006',
        name: 'mySQL',
        pwd: 'admin'
    }
};

const db1 = {...dbConfig};

db1.appName = 'google.com'

console.log(db1);

// let unextendableObj = Object.seal(dbConfig);
// unextendableObj.appName = "google.com";

// delete unextendableObj.appName;
// delete unextendableObj.database.host;

// console.log(unextendableObj);

let unextendableObj = Object.freeze(dbConfig);
unextendableObj.appName = "google.com";

delete unextendableObj.appName;
delete unextendableObj.database.host;
unextendableObj.extraConfig = 'data';

console.log(unextendableObj);

// assignment -> how you can make sure to not modify the nested objects as well.



