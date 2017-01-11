
function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var index = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      console.log(str[i]);
      console.log(vowels[j]);
      if (str[0] == vowels[j]) {
        return (str + "way");
      } else {
        if (str[i] == vowels[j]) {
          index = i;
          var end = str.substr(0, i);
          var newStr = str.slice(i);
          return (newStr + end + "ay");
        }   
      } 
    }
  }  
}