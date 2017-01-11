
function convertHTML(str) {
  // &colon;&rpar;
  
  var index;
  var newStr;
  var symbols = ['&', '<', '>', '"', "'"];
  var HTML = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  for (var i = 0; i < symbols.length; i++) {
    if (str.indexOf(symbols[i]) != -1) {
      index = str.indexOf(symbols[i]);
      var lookingFor = (symbols[i]);
      var replaceWith = (HTML[i]);
      str = str.replace(lookingFor, replaceWith);
      i=0;
    }
  }
  return str;
}
