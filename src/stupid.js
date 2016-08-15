function stupid (choosen) {
  if (choosen.length === 27) {
    throw new Error('I am a stupid AI, but I understand that there is no choice available.')
  }

  // Get the center, if available...
  if (choosen.indexOf(13) === -1) {
    // ...not every time.
    if (Math.random() < 0.5) return 13
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
