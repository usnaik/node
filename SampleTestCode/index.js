// import fetch from 'node-fetch';
// const promise = fetch('http://jsonplaceholder.typicode.com/todos/1');
// promise
//     .then(res => res.json())
//     .then(user => console.log('Hello ', user.title));
var tick = Date.now();
var log = function (v) { return console.log(v + " \n Elapsed : " + (Date.now() - tick) + " "); };
console.log('Synch 1 ');
var codeBlock = function () {
    var i = 0;
    while (i <= 1000000) {
        i++;
    }
    return ':-), Billion times done.';
};
log(codeBlock());
console.log('Synch 2 ');
