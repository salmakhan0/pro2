console.clear();
function highestScore(scores) {
  var max = scores[0];
  for (var x = 1; x < scores.length; x++) {
    if (max < scores[x]) {
      max = scores[x];
    }
  }
  return max;
}

var scores = [21, 98, 1, 88, 15];
var maxScore = highestScore(scores);
console.log(maxScore);