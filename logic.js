//! delete function

function deleteItem(array, item) {
  return array.filter((e) => e.id !== item.id)
}

module.exports = { deleteItem }
