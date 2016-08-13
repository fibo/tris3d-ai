var tris3d = require('tris3d')
var stupid = require('./stupid')

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
        // Nothing to do if choice is not available.
        if (choosen.indexOf[i] > -1) continue

        var coords0 = tris3d.coordinatesOfIndex(i)
        var coords1 = tris3d.coordinatesOfIndex(myChoices[j])
        var coords2 = tris3d.coordinatesOfIndex(myChoices[k])

        // Check if it is a winning choice.
        if (tris3d.isTris(coords0, coords1, coords2)) {
          return i
        }
      }
    }
  }

  // If no winning choice is found, behave like a stupid AI.
  return stupid(choosen)
}

module.exports = smart
