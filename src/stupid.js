function stupid (choosen) {
  if (choosen.length === 27) {
    throw new Error('I am a stupid AI, but I understand that there is no choice available.')
  }

  var choice = Math.floor(Math.random() * 26)

  var choiceIsAvailable = (choosen.indexOf(choice) === -1)

  if (choiceIsAvailable) {
    return choice
  } else {
    return stupid(choosen) // <-- Recursion here.
  }
}

module.exports = stupid
