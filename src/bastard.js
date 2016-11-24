const tris3d = require('tris3d')

const tryToBlock = require('./tryToBlock')
const stupid = require('./stupid')
const victoryIsMine = require('./victoryIsMine')

function bastard (targetPlayer) {
  return function (choosen) {
    if (choosen.length === 27) {
      // This is a *bastard* ai, error message is more aggressive.
      throw new Error('Are you stupid? There is no choice available.')
    }

    const myPlayerIndex = choosen.length % 3

    if (myPlayerIndex === targetPlayer) {
      // This is a *bastard* ai, it will get angry if you ask it to target itself.
      throw new Error('You bastard! I will not play against my self.')
    }

    // First of all try to win.
    const yeah = victoryIsMine(choosen)
    if (yeah) return yeah

    // Then try to block targetPlayer.
    const ahahah = tryToBlock(targetPlayer, choosen)
    if (ahahah) return ahahah

    // Then try to block theOtherPlayer.
    const theOtherPlayer = tris3d.semiSumInZ3xZ3xZ3(myPlayerIndex, targetPlayer)
    const muahaha = tryToBlock(theOtherPlayer, choosen)
    if (muahaha) return muahaha

    // If no winning choice is found, behave like a stupid AI.
    return stupid(choosen)
  }
}

module.exports = bastard
