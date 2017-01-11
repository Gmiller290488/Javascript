
function convertToRoman(num) {
  var romanNum = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M", "MM", "MMM", "CMMM"];
  var deciNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500,600, 700, 800, 900, 1000, 2000, 3000, 4000];
  var longNum = [];
  var newNum = [];
  var convertNum;
  
  if (deciNum.indexOf(num) != -1){
    return romanNum[(deciNum.indexOf(num))];
  
}
  else {
    newNum = num.toString(10).split("");
    var zeros = newNum.length-1;
    
    for (var i = 0; i < newNum.length; i++){
      convertNum = (newNum[i] * (Math.pow(10, zeros)));
      zeros--;
      longNum.push(romanNum[(deciNum.indexOf(convertNum))]);
  }
  return longNum.join('');
  }
}
convertToRoman(2014);