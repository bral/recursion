// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  
  var result;
  
  //If obj is a string return obj
  if(typeof obj === 'string'){
		result =  '"' + obj + '"';
		return result;
  }
  
  //If obj is boolean return obj
  if(typeof obj === 'boolean'){
		result = String(obj);
		return result;
  }
  
  //If obj is number return obj
  if(typeof obj === 'number'){
		result = String(obj);
		return result;
  }
  
  //If obj is 'null' return obj
  if(obj === null){
		result =  String(obj);
		return result;
  }
  
  //If obj is undefined return nothing
  if(typeof obj === "undefined"){
	  result = '';
	  return String(result);
  }
  
  //If obj is a function return nothing
  if(typeof obj === "function"){
	  result = '';
	  return String(result);
  }
  
  //If obj is object check to see if it is an array or an object
  if(typeof obj === 'object'){
    
    //If obj is array recursively cycle through it
    if(obj instanceof Array){
	  	result = [];
			for(var i = 0; i < obj.length; i++){
				result.push(stringifyJSON(obj[i]));
			}
			return "[" + String(result) + "]";
    }
    
    //If obj is object recursively cycle through it
    if(obj instanceof Object){
    	console.log(obj);
	    result = [];
	    for(var i in obj){
	    	if(typeof obj[i] === 'function' || typeof obj[i] === 'undefined'){
		    	delete [i]
	    	} else {
		    result.push('"' + i + '":' + stringifyJSON(obj[i]));
				}
	    }
			return "{" + String(result) + "}";
    }
    
  };
   
};
