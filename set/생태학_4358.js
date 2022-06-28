const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';

let input = require('fs').readFileSync(filePath).toString().trim();

let mylist = input.split("\n");

mylist.sort();
const map = new Map();
let sum = 0;

for ( let i = 0; i<mylist.length;i++){
    if(!map.has(mylist[i])) map.set(mylist[i],1)
    else map.set(mylist[i],map.get(mylist[i])+1)
}


map.forEach((i,j)=>{
    sum+=i
})
let answer = "";

map.forEach((v,k)=>{
    let num = v/sum*100;
    map.set(k,num.toFixed(4));
});


map.forEach((v,k)=>{
    answer+= k + " "+v+"\n";
});

console.log(answer);