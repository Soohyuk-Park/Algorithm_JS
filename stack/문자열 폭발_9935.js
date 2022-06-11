const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';

const input = require('fs').readFileSync(filePath).toString().trim()

let mylist = input.split('\n');
let boomStr = mylist[1];
console.log(mylist);
let str = mylist[0];
let answer = [];
for ( let i = 0; i<str.length; i++){
    answer.push(str[i]);
    let right = answer
        .slice(answer.length - boomStr.length, answer.length)
        .join('');
    if ( right == boomStr ) for ( let j = 0; j <boomStr.length; j++) answer.pop();
}
console.log(answer.join('') || 'FRULA');