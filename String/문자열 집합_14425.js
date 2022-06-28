const filePath = process.platform === 'linux' ? 
'/dev/stdin' : '../input.txt';

let input = require('fs').readFileSync(filePath).toString().trim();
input = input.split("\n");

let [N,M] = input.shift().trim().split(' ').map(Number);
const arrN = [];
const arrM = [];
const ob = {};

for(let i = 0; i < N; i++){
    arrN.push(input[i].trim());
}

for(let k = N; k < M+N ; k++){
    arrM.push(input[k].trim());
}


for(let i =0; i < N; i++){
    ob[arrN[i]]=true;
}

let count =0;

for(let i = 0; i < M; i++){
    if(ob[arrM[i]]){
        count++;
    }
}

console.log(count);