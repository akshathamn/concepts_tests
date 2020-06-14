let promise = new Promise(function(resolve,reject){
	setTimeout(()=> resolve ('done'), 500);
	setTimeout(() =>reject(new Error('error')),1000)
		});
			
	promise.finally(()=>console.log('pass to the next'));
	promise.then(
			   result => console.log(result)		
			   )
		    .catch(
               error => console.log(error)
			     )
 





// callback function
//  function work(a,call){
// console.log(a) ; 
// call();
//  }
//  function complete (){
// console.log('hello');
//  }
//  work(1,complete);


// let cleanRoom = function() {
//   return new Promise(function(resolve, reject) {
//     resolve('Cleaned The Room');
//   });
// };

// let removeGarbage = function(message) {
//   return new Promise(function(resolve, reject) {
//     reject(message + ' remove Garbage');
//   });
// };

// let winIcecream = function(message) {
//   return new Promise(function(resolve, reject) {
//     resolve( message + ' won Icecream');
//   });
// };

// cleanRoom().then(function(result){
// 	return removeGarbage(result);
// }).then(function(result){
// 	return winIcecream(result);
// }).then(function(result){
// 	console.log('finished ' + result);
// }).catch(function(result){
// 	console.log('unable to start');
// })
