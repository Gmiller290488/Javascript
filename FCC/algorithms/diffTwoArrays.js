function diffArray(arr1, arr2) {
  var newArr = [];
  function isIn(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++){
      if (arr2.indexOf(arr1[i]) == -1) {
        newArr.push(arr1[i]);
      }
    }
    for (var j = 0; j < arr2.length; j++) {
      if (arr1.indexOf(arr2[j]) == -1) {
        newArr.push(arr2[j]);
  }
    }
  }
  isIn(arr1, arr2);
  return newArr;
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);