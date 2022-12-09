var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
if (selector[0] === "#") return "id"; 
else if (selector[0] === ".") return "class";
else if (selector[0] !== "#" && selector[0] !== "." ){
  for (const i of selector) {
  if (i === ".") return "tag.class";
  
} return "tag"}

};  

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function (element){
      if (element === selector){
          
      }
      else return false;
    }
   
  } else if (selectorType === "class") {
    matchFunction = function (element){
      if (element === selector) return true   
      else return false;
    }
    
  } else if (selectorType === "tag.class") {
   
    matchFunction = function (element){
      if (element === selector) return true;
      else return false;
    }
  } else if (selectorType === "tag") {
    matchFunction = function (element){
      if (element === selector) return true;
      else return false;
    }
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
