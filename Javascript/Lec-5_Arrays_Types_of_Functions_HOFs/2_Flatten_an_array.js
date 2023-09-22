/****
 * flatten an array?
 *    - need a nested array -> [1, [2,3],4,5,[6, [2,6]]];
 *    - eg:
 *         arr1.flat(Infinity);
 * 
 *    - Most imp IQ
 *       -> can you write the custom method to flat an array? 
 */

Array.prototype.flattenArray = function(depth=1) {
    let flattened = [];

        for(let i = 0; i<this.length; i++) {
            if(Array.isArray(this[i]) && depth > 0) {
                flattened = flattened.concat(this[i].flattenArray(depth-1))
            } else {
                flattened.push(this[i]);
            }
        }
    return flattened;
}

const nestedArray = [1, [2,3],4,5,[6, [2,6]]];
console.log(nestedArray.flattenArray(Infinity));

