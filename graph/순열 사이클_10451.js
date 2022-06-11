const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';

input = require('fs').readFileSync(filePath).toString().trim();

let mylist = input.split('\n');
let t = Number(mylist.shift());



while (t-->0){
    let cnt = 0;
    N = Number(mylist.shift());
    nowList = mylist.shift().split(' ').map(Number);
    visited = Array.from({length : nowList.length + 1}, () => 0);
    graph = Array.from({length: nowList.length + 1}, ()=>[]);
    for ( let i = 1; i <= nowList.length; i++ ){
        graph[i].push(nowList[i-1])
    }
    for( let i of nowList){
        if (visited[i] === 0){
            cycleChecker(i);
            cnt+=1;
        }
    }

    console.log(cnt);

    function cycleChecker(node){
        if (visited[node] === 0){
            visited[node] = 1
            cycleChecker(graph[node]);
        }
        else{
            return;
        }
    }
    
}
