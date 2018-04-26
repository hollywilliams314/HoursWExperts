
let page = fetch('https://eloquentjavascript.net')
	.then(function(resp) {
		return resp.text();
		})
	.then(function(text){
		console.log(text.match(/third/gi).length);
//      let howMany = text.match(/third/gi).length;
//	    console.log(howMany);
//      return text;
});


// let page = fetch('https://eloquentjavascript.net')
// 	.then(function(resp) {
// 		return resp.text();
// 		})
// 	.then(function(text){
//       return text;
// });
//
// page.then(function(text) {
//     let howMany = text.match(/third/gi).length;
// 	console.log(howMany);
//
// });

// Chandler's code
// fetch(url).then(function(response) {
//     return response.text()
// }).then(function(text) {
//     console.log(text.toString().match(/third/g).length);
// });

//The above code will return you a promise
//Using this promise, find and print the number of times 'third',
//case insensitive, appears on the web page  (should be 3)

//This can be run in the eloquenentjavascript sandboxes
