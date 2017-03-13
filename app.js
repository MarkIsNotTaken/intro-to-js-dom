console.log("Sanity Check");
//finding HTML elements
//console.log(document.getElementById("use-id-method"));
var idElement = document.getElementById("use-id-method");
console.log(idElement);
//console.log(document.getElementsByTagName("div"));
var tagElements = document.getElementsByTagName("div");
console.log(tagElements);
//console.log(document.getElementsByClassName("use-class-method"));
var classElements = document.getElementsByClassName("use-class-method");
console.log(classElements[0]);

//changing HTML elements
console.log(idElement.innerHTML);
idElement.innerHTML = "I have been changed!";

//changing HTML elements through className
console.log(classElements);
classElements[1].innerHTML = "I have been changed by className and array target";

