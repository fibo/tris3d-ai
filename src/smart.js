var tris3d = require('tris3d')
var bastard = require('./bastard')

function smart (choosen) {
  if (choosen.length === 27) {
    throw new Error('No choice available.')
  }

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

  // If no winning choice is found, behave like a bastard AI.
  return bastard(choosen)
}

module.exports = smart
