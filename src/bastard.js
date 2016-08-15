var tris3d = require('tris3d')
var smart = require('./smart')

function bastard (choosen) {
  if (choosen.length === 27) {
    throw new Error('Are you stupid? There is no choice available.')
  }

  var otherPlayersWinningChoicesCount = {}
  var previousPlayerChoices = []
  var nextPlayerChoices = []

  var coords0
  var coords1
  var coords2

  var i
  var j
  var k

  var isAvailable
  var isWinningChoice

  for (var byPrevious = choosen.length - 1; byPrevious >= 0; byPrevious -= 3) {
    previousPlayerChoices.push(choosen[byPrevious])
  }

  for (var byNext = choosen.length - 2; byNext >= 0; byNext -= 3) {
    nextPlayerChoices.push(choosen[byNext])
  }

  for (k = 1; k < previousPlayerChoices.length; k++) {
    for (j = 0; j < k; j++) {
      for (i = 0; i < 27; i++) {
        coords0 = tris3d.coordinatesOfIndex(i)
        coords1 = tris3d.coordinatesOfIndex(previousPlayerChoices[j])
        coords2 = tris3d.coordinatesOfIndex(previousPlayerChoices[k])

        isAvailable = (choosen.indexOf(i) === -1)
        isWinningChoice = tris3d.isTris(coords0, coords1, coords2)

        if (isWinningChoice && isAvailable) {
          if (typeof otherPlayersWinningChoicesCount[i] === 'number') {
            otherPlayersWinningChoicesCount[i]++
          } else {
            otherPlayersWinningChoicesCount[i] = 0
          }
        }
      }
    }
  }

  for (k = 1; k < nextPlayerChoices.length; k++) {
    for (j = 0; j < k; j++) {
      for (i = 0; i < 27; i++) {
        coords0 = tris3d.coordinatesOfIndex(i)
        coords1 = tris3d.coordinatesOfIndex(nextPlayerChoices[j])
        coords2 = tris3d.coordinatesOfIndex(nextPlayerChoices[k])

        isAvailable = (choosen.indexOf(i) === -1)
        isWinningChoice = tris3d.isTris(coords0, coords1, coords2)

        if (isWinningChoice && isAvailable) {
          if (typeof otherPlayersWinningChoicesCount[i] === 'number') {
            otherPlayersWinningChoicesCount[i]++
          } else {
            otherPlayersWinningChoicesCount[i] = 0
          }
        }
      }
    }
  }

  // Sort winning choices by their occurrence.
  var otherPlayersWinningChoices = Object.keys(otherPlayersWinningChoicesCount)

  if (otherPlayersWinningChoices.length > 0) {
    otherPlayersWinningChoices.sort(function (a, b) {
      if (otherPlayersWinningChoicesCount[a] < otherPlayersWinningChoicesCount[b]) return -1
      if (otherPlayersWinningChoicesCount[a] === otherPlayersWinningChoicesCount[b]) return 0
      if (otherPlayersWinningChoicesCount[a] > otherPlayersWinningChoicesCount[b]) return 1
    })

    return parseInt(otherPlayersWinningChoices[0])
  }

  // If no choice is found, behave like a smart AI.
  return smart(choosen)
}

module.exports = bastard
