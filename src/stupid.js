function stupid (choosen) {
  if (choosen.length === 27) {
    throw new Error('I am a stupid AI, but I understand that there is no choice available.')
  }

  // Get the center, if available...
  if (choosen.indexOf(13) === -1) {
    // ...not every time.
    if (Math.random() < 0.71) return 13
  }

  // Pick up a corner.
  var corners = [0, 2, 6, 8, 18, 20, 24, 26]
  var cornerIndex = Math.floor(Math.random() * 7)
  var cornerChoice = corners[cornerIndex]

  // Get some corner, if available...
  if (choosen.indexOf(cornerChoice) === -1) {
    // ...not every time.
    if (Math.random() < 0.5) return cornerChoice
  }

  // Else get some other choice.
  var choice = Math.floor(Math.random() * 26)

  var choiceIsAvailable = (choosen.indexOf(choice) === -1)

  if (choiceIsAvailable) {
    return choice
  } else {
    return stupid(choosen) // <-- Recursion here.
  }
}

module.exports = stupid
