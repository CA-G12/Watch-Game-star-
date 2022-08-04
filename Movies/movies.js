let arrayItem = JSON.parse(localStorage.getItem('movies'))

arrayItem.forEach((ele) => {
  document.querySelector('.cards-container').appendChild(createCard(ele))
})

serachInput.addEventListener('keyup', (e) => {
  searchByName(e, 'movies')
})
let arrRondom = []
function saveId(icon) {
  let lovedMovies = localStorage.getItem('lovedMovies')
    ? JSON.parse(localStorage.getItem('lovedMovies'))
    : []
  if (!lovedMovies.includes(icon.id)) {
    lovedMovies = addToArr(lovedMovies, icon.id)
    icon.classList.add('loved')
  } else {
    lovedMovies = lovedMovies.filter((ele) => ele != icon.id)
    icon.classList.remove(['loved'])
  }
  localStorage.setItem('lovedMovies', JSON.stringify(lovedMovies))
}

slider(arrayItem, arrRondom)

createSliderItem(arrRondom)
