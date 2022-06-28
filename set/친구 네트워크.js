const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';

let input = require('fs').readFileSync(filePath).toString().trim();

let mylist = input.split("\n");

let testCase = Number(mylist.shift());

const findRoot = n => {
    if (parents[n] === n){
        return n;
    } else {
        parents[n] = findRoot(parents[n]);
        return parents[n];
    }
};
const answer = [];
const union = (n1,n2) => {
    const root1 = findRoot(n1);
    const root2 = findRoot(n2);
    if (root1 !== root2){
        parents[root2] = root1;
        number[root2] += number[root1];
        number[root1] = number[root2];
    }
};
while ( testCase > 0 ){
    testCase -= 1;
    const cardinality = Number(mylist.shift());
    parents = {};
    number = {};
    for ( let j = 0; j < cardinality; j++){
        const [a,b] = mylist.shift().split(" ");
        if (!parents[a]){
            parents[a] = a;
            number[a] = 1;
        }
        if (!parents[b]){
            parents[b] = b;
            number[b] = 1;
        }
        union( a , b );

        answer.push(number[findRoot(a)]);
    }
}
    console.log(answer.join("\n"));


