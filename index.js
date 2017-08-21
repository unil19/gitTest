var axios = require("axios");
axios.post('http://localhost:9999/invoke', {
	fcn: 'fcn',
	args: 'args1,args2'
	})
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});
// axios.post('http://localhost:9999/query', {
// 	fcn: 'fcn',
// 	args: 'args1,args2'
// 	})
// 	.then(function (response) {
// 		console.log(response);
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});