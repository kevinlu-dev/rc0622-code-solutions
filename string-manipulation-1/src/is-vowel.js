/* exported isVowel */
function isVowel(character) {
  var vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  var result = false;
  for (let i = 0; i < character.length; i++) {
    if (vowels.includes(character[i])) {
      result = true;
    }
  }
  return result;
}
