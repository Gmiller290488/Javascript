function myReplace(str, before, after) {
  console.log(before[0]);
  var beforeCheck = before;
  var endStr = "";
  if (beforeCheck[0] === beforeCheck[0].toUpperCase()) {
    var newAfter = after[0].toUpperCase() + after.slice(1);
    console.log(newAfter);
    endStr = str.replace(before, newAfter);
  }
    else {
    endStr = str.replace(before, after);
    }
  return endStr;
} 