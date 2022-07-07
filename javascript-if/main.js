/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  var underFive = number < 5;
  return underFive;
}

function isEven(number) {
  var even = number % 2 === 0;
  return even;
}

function startsWithJ(string) {
  var startsJ = string[0] === 'J';
  return startsJ;
}

function isOldEnoughToDrink(person) {
  var canDrink = person.age > 21;
  return canDrink;
}

function isOldEnoughToDrive(person) {
  var canDrive = person.age > 16;
  return canDrive;
}

function isOldEnoughToDrinkAndDrive(person) {
  var oldEnoughToDrink = person.age <= 0;
  return oldEnoughToDrink;
}

function categorizeAcidity(pH) {
  var msg;
  if (pH === 7) {
    msg = 'neutral';
  }
  if ((pH < 7) && (pH >= 0)) {
    msg = 'acid';
  }
  if ((pH <= 14) && (pH > 7)) {
    msg = 'base';
  }
  if ((pH < 0) && (pH > 14)) {
    msg = 'invalid pH level';
  }
  return msg;
}

function introduceWarnerBro(name) {
  var phrase;
  if ((name === 'yakko') || (name === 'wakko')) {
    phrase = "We're the warner brothers";
  }
  if (name === 'dot') {
    phrase = "I'm cute~";
  }

  if ((name !== 'yakko') && (name !== 'wakko') && (name !== 'dot')) {
    phrase = 'Goodnight everybody!';
  }
  return phrase;
}
