const smart = require('tris3d-ai').smart
const test = require('tape')

test('smart', function (t) {
  t.plan(3)

  const choosen = [0, 10, 11, 1, 5, 6]
  t.equal(smart(choosen), 2, 'tryes to win')

  t.ok((smart([0, 1, 2, 3]) > 3), 'otherwise moves randomly')

  t.throws(() => {
    smart([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26])
  }, 'complains if there are no moves left')
})

