const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';

let input = Number(require('fs').readFileSync(filePath).toString());

// console.log(input);
// var I = input.map( (a) => a.split(" ").map(Number) );

let arr = [] // 입력값을 나눈 배열
let tole = new Number() // 공차
let initTole = new Number() // 최초 공차
let underHundred = 99 // 100미만의 수 한수와 그 자체의 수가 같음
let overHundred = 0 // 100이상의 수
let result = 0 // 결과

function solution(num) {
  if (num < 100) result = num
  else {
    for (let i = 100; i <= num; i++) {
      arr = String(i).split("").map(Number);
      for (let j = 0; j <= arr.length - 2; j++) {
        if (j === 0) initTole = arr[j] - arr[j + 1]
        else {
          tole = arr[j] - arr[j + 1]
          if (initTole === tole) {
              overHundred++
          }
        }
      }
    }
    result = underHundred + overHundred
  }
  console.log(result)
}

solution(input);