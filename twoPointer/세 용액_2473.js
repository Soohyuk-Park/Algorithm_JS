const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';

input = require('fs').readFileSync(filePath).toString().trim();

let mylist = input.split('\n');
let n = mylist.shift();
let numList = mylist.shift().split(' ').map(Number);
let diff = Number.MAX_VALUE;
numList.sort((a,b)=> a-b);
let answerList = []
console.log(numList);

console.log(numList)

for (let i = 0 ; i < numList.length-2; i++){
    let start = i+1;
    let end = numList.length-1

    while(start<end){
        let sumNow = (numList[i] + numList[start] + numList[end]);
        if (Math.abs(sumNow) < diff ){
            answerList = [numList[i], numList[start], numList[end]]
            diff = Math.abs(sumNow);
        }
        if (sumNow > 0){
            end -= 1;
            continue;
        }
        else{
            start += 1;
            continue;
        }
    }
}
console.log(...answerList);