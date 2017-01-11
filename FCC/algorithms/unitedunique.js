
function uniteUnique(arr) {
  
  var newArr = [];
  for (var i = 0; i < arguments.length; i++) {
    var argumentArray = arguments[i];
  for (var j = 0; j < argumentArray.length; j++){
    if (newArr.indexOf(argumentArray[j]) == -1) {
      newArr.push(argumentArray[j]);
    }
  }
  }
      return newArr;
}
