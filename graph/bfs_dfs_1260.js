const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'input.txt';

const fs = require("fs");
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

    const [n, m, v] = input.shift();

    solution(input);
    
    function solution(arr) {
        // const d_visited = Array.from({ length: n + 1 }, () => 0);
        // const b_visited = Array.from({ length: n + 1 }, () => 0);
        // const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
        // const dfs_answer = [];
        // const bfs_answer = [];
        const d_visited = Array.from({length : n+1},()=>0);
        const b_visited = Array.from({length: n+1}, () => 0);
        const graph = Array.from({length : n+1} , ()=>Array(n+1).fill(0));
        const dfs_answer = [];
        const bfs_answer = [];



        for (const [x, y] of arr) {
            graph[x][y] = 1;
            graph[y][x] = 1;
        }
    
        dfs(v);
        bfs(v);
    
        console.log(dfs_answer.join(" "));
        console.log(bfs_answer.join(" "));
    
        function dfs(cur) {
            d_visited[cur] = 1;
            dfs_answer.push(cur);
    
            for (let i = 1; i < graph.length; i++) {
                if (graph[cur][i] && !d_visited[i]) {
                    dfs(i);
                }
            }
        }
    
        function bfs(init) {
            const queue = [];
            queue.push(init);
            bfs_answer.push(init);
    
            while (queue.length) {
                const val = queue.shift();
                b_visited[val] = 1;
    
                for (let i = 1; i < graph.length; i++) {
                    if (graph[val][i] && !b_visited[i]) {
                        b_visited[i] = 1;
                        queue.push(i);
                        bfs_answer.push(i);
                    }
                }
            }
        }
    }