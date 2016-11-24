const tris3d = require('tris3d')

/**
 * Check if there is some winning choice available.
 *
 * ```
 *  const yeah = victoryIsMine(choosen)
 *  if (yeah) return yeah
 * ```
 */
function victoryIsMine (choosen) {
  var myChoices = []

  for (var byMe = choosen.length - 3; byMe >= 0; byMe -= 3) {
    myChoices.push(choosen[byMe])
  }

  for (var k = 1; k < myChoices.length; k++) {
    for (var j = 0; j < k; j++) {
      for (var i = 0; i < 27; i++) {
        var coords0 = tris3d.coordinatesOfIndex(i)
        var coords1 = tris3d.coordinatesOfIndex(myChoices[j])
        var coords2 = tris3d.coordinatesOfIndex(myChoices[k])

        // Check if it is a winning choice available.
        var isAvailable = (choosen.indexOf(i) === -1)
        var isWinningChoice = tris3d.isTris(coords0, coords1, coords2)

        if (isWinningChoice && isAvailable) {
          return i
        }
      }
    }
  }

  // If there is no winning choice...
  return
}

module.exports = victoryIsMine
