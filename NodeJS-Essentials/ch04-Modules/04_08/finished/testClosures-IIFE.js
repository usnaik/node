var i = 0;

// Ref: https://youtu.be/vYQ6ge4N4iM
var print = function () {
    console.log(i);
}
for (i=0; i<10; i++) {
    setTimeout(print, 1000);
}


// // Ref: https://youtu.be/vYQ6ge4N4iM
// for (i=0; i<10; i++) {
//     (function (currVali) {
//         // let currVali = i;
//         setTimeout(function() {
//             console.log(currVali);
//         }, 1000);    
//     })(i);
// }
