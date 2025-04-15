// closure in js: a function along with it's lexical enviroment forms a closure.
// A closure lets a function remember and access variables from its outer scope, even when that outer function is no longer active.
// A closure is when a function remembers and has access to variables from its outer (parent) scope, even after the outer function has finished executing.

// function x() {
//     var a = 12
//     function y() {
//         console.log(a)
//     }
//     return y;
// }
// var z = x();
// console.log(z)
// z(); 

// function z() {
//     function x() {
//         var a = 12
//         function y() {
//             console.log(a)
//         }
//         a = 900
//         y();
//     }
//     x();
// }
// z();


// crazy interview on closure

// function outest(){
//     var c = 20;
//     function outer(b){
//         function inner(){
//             console.log(a, b, c);
//         }
//         // let a = 10;
//        return inner;
//     }
//     return outer; 
// }
// let a = 100; 
// outest()("hello world")();

// data hiding 




// encapsulation  