const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';

input = require('fs').readFileSync(filePath).toString().trim();

mylist = input.split('\n');
L = mylist.shift().split(' ').map(Number);
let a = mylist.splice(0,L[0]);
// console.log(a);
// console.log(mylist);
a = new Set(a);
mylist = new Set(mylist);
let result = new Set([...a].filter((v) => mylist.has(v)));
console.log([result.size, ...result].sort().join('\n'));