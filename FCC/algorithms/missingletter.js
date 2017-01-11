function fearNotLetter(str) {
  var tmp = str.charCodeAt(0);
  var unknown;
  for (var i = 1; i < str.length; i++) {
    if ((str.charCodeAt([i]) - tmp) != 1) { 
      return (String.fromCharCode(tmp+1));
    }
    
    else {
      tmp++;
    }
  }
    return (unknown);
} 
