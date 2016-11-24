const bastard0 = require('tris3d-ai').bastard(0)
const bastard1 = require('tris3d-ai').bastard(1)
const test = require('tape')

test('bastard', function (t) {
  t.plan(4)

  t.equal(bastard0([0, 7, 11, 1]), 2, 'tryes to block target player')

  t.equal(bastard1([10, 0, 7, 4, 1, 8]), 2, 'tryes to block next player')

  t.throws(() => {
    bastard0([10, 0, 7, 4, 1, 8])
  }, 'complains if you ask it to block itself')

  t.throws(() => {
    bastard0([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26])
  }, 'complains if there are no moves left')
})

