
function sumFibs(num) {
  var a = 0, b = 1, f = 1;
  var total = 1;
    while (f < num) {
        f = a + b;
        if (f > num){
          break;
        }
        a = b;
        b = f;
        if (f%2 !== 0) {
          total += f;
        }
    }
    return total;
}
sumFibs(10);