var addTo = function (passed){
var add = function(inner){
    return passed + inner;
};
return add;
};
var addthree = new addTo(3);
var addFour = new addTo(4);
console.log( addthree(2));
console.log( addFour(3));


//     var cd = function(get){
//         var pass = 5;
//         return pass + get;
//     };
// console.log(cd(5));


// let f ;
// if(true){
// let i =1;
//  f = () => {
//     console.log(i);
// }
// console.log(i);
// }
// f();
