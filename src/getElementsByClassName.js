// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  //You should use document.body, element.childNodes, and element.classList 
  //Also reference https: //developer.mozilla.org/en-US/docs/Web/API/element?redirectlocale=en-US&redirectslug=DOM%2Felement
  //console.log(className);
  //console.log(document.childNodes);
  var result = [];
  
  //Loop through the document.body elements
  function check(node){
    var childnode = node.childNodes
  
  	for(var i = 0; i < childnode.length; i++){
  		//console.log(childnode[i]);
	  	//If the class name of element is equal to className push the element to result
			if(childnode[i].className !== undefined){
				if(childnode[i].classList.contains(className)){
			  	result.push(childnode[i]);
				} else {
					check(childnode[i])
				}
			}
		}
	};
	
	check(window.document);
  
  //console.log(result);
  return result; 
  
};
