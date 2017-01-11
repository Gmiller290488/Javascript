
function pairElement(str) {
  var first = ['A', 'C', 'G', 'T'];
  var second = ['T', 'G', 'C', 'A'];
  var arr = str.split('');
  var finArr = [];
  for (var i= 0; i < str.length; i++) {
    var a = first.indexOf(str[i]);
    finArr.push([first[a], second[a]]);
    a = 0;
  }
  return finArr;
}