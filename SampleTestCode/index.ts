// import fetch from 'node-fetch';
// const promise = fetch('http://jsonplaceholder.typicode.com/todos/1');
// promise
//     .then(res => res.json())
//     .then(user => console.log('Hello ', user.title));

const tick = Date.now();
const log = (v) => console.log (`${v} \n Elapsed : ${Date.now() - tick} `);

console.log('Synch 1 ');

const codeBlocker = () => {

    let i = 0;
    while (i<=1000000) { i++;}
    return ':-), Billion times done.';
}

log(codeBlocker();

console.log('Synch 2 ');
