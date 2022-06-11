const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';

const N = require('fs').readFileSync(filePath).toString().trim()

function solution(N) {
    console.log(N.split('').sort((a, b) => b - a).join(''))
}

solution(N)