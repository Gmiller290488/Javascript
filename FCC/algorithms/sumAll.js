function sumAll(arr) {
  var a = arr[0];
  var b = arr[1];
  var min = Math.min(a, b);
  var max = Math.max(a,b);
  var total = 0; 
  for (var i = min; i <= max; i++) {
    total += i;
    
  }
  return total;
}

sumAll([1, 4]);
