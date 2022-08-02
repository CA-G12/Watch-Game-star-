const { deleteItem } = require('./logic')

test('Refactor our delete item function so it is pure.', function () {
  expect(deleteItem([{ id: 1 }, { id: 2 }], { id: 1 })).toEqual([{ id: 2 }])
})
test('Refactor our delete item function so it is pure.', function () {
  expect(deleteItem([{ id: 1 }, { id: 2 }], { id: 3 })).toEqual([
    { id: 1 },
    { id: 2 },
  ])
})
