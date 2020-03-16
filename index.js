let promise = new Promise(function(resolve,reject){
	setTimeout(()=>{
		resolve("resolve");
	},2000)
})
let promise2 = new Promise(function(resolve,reject){
	setTimeout(()=>{
		resolve("resolve2");
	},2000)
})
let promise3 = new Promise(function(resolve,reject){
	setTimeout(()=>{
		reject("reject3");
	},2000)
})

promise.then((response)=>{
	console.log("first then ---> ",response);
	return response;
}).then((response)=>{
	console.log("2nd then ---> ",response);
}).then(()=>{
	return promise2;
}).then((response)=>{
	console.log("3rd then ---> ",response);
	return promise3;
}).then((response)=>{
	console.log("4th then ---> ",response);
}).catch((err)=>{
	console.log("1st catch ---> ",err);
	return err;
}).then((response)=>{
	console.log("5th then ---> ",response);
	throw new Error("error genertae")
}).then((response)=>{
	console.log("6th then ---> ",response);
}).catch((err)=>{
	console.log("2nd catch ---> ",err);
	return err;
}).then((response)=>{
	console.log("7th then ---> ",response);
}).then((response)=>{
	console.log("8th then ---> ",response);
}).catch((err)=>{
	console.log("3nd catch ---> ",err);
});