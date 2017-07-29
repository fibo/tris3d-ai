const tris3d = require('tris3d')

/**
 * Compute a choice to block a given player.
 *
 * ```
 * const ahahah = tryToBlock(targetPlayer, choosen)
 * if (ahahah) return ahahah
 * ```
 */

function tryToBlock (targetPlayer, choosen) {
  var targetPlayerChoices = []

  for (var n = targetPlayer; n < choosen.length; n += 3) {
    targetPlayerChoices.push(choosen[n])
  }

  for (var k = 1; k < targetPlayerChoices.length; k++) {
    for (var j = 0; j < k; j++) {
      for (var i = 0; i < 27; i++) {
        var coords0 = tris3d.coordinatesOfIndex(i)
        var coords1 = tris3d.coordinatesOfIndex(targetPlayerChoices[j])
        var coords2 = tris3d.coordinatesOfIndex(targetPlayerChoices[k])

        var isAvailable = (choosen.indexOf(i) === -1)
        var isWinningChoice = tris3d.isTris(coords0, coords1, coords2)

        if (isWinningChoice && isAvailable) return i
      }
    }
  }
}

module.exports = tryToBlock
