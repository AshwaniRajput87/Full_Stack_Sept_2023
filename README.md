# Learning Core Concepts Of JS.

##Problem in code:
```
function flattenObject(ob) {
// Write your solution here ========================
if(typeof ob!=='object' || ob==null)
return ob
let flatCopy = {}
function innerFlattenObject(ob, parent){
let updatedKey = ""
if (parent !==undefined)
updatedKey = parent + "."
for(let ky in ob){
if(Object.prototype.hasOwnProperty.call(ob,ky)){
if(typeof ob[ky]!=='object' || ob[ky]==null){
flatCopy[updatedKey+ky]= ob[ky];
}
else {
innerFlattenObject(ob[ky], updatedKey+ky) } } } return flatCopy } return innerFlattenObject(ob)
}


For e.g/.
let objT = {
   abc: 123,
   abr: [1,2,3],
   fcv: {
    rtv: 123,
    abc: 123
   }
} 

objT.aprt = ["r","p","m"]

```