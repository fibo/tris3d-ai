const victoryIsMine = require('./victoryIsMine')
const stupid = require('./stupid')

function smart (choosen) {
  if (choosen.length === 27) {
    throw new Error('No choice available.')
  }

  const yeah = victoryIsMine(choosen)
  if (yeah) return yeah

  // If no winning choice is found, behave like a stupid AI.
  return stupid(choosen)
}

module.exports = smart
