// let obj = {
// 	name: 'Carlos'
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

let personStr = '{"name": "Carlos", "age": 28}';
let objJson = JSON.parse(personStr)
console.log(typeof objJson);
console.log(objJson);