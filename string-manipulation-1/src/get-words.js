/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {

    var subStrings = string.split(' ');
    return subStrings;

  }
}
