const movieUrl =
  'https://yts.mx/api/v2/list_movies.json?page=501&limit=50&api_key=7779a67355fa280acccffd8e56db02d1'

fetchingMovie(movieUrl, ({ data }) => {
  const moviesArr = data.movies
  localStorage.setItem('movies', JSON.stringify(moviesArr))
  moviesArr.forEach((ele) => {
    document.querySelector('.cards-container').appendChild(createCard(ele))
  })
})

serachInput.addEventListener('keyup', (e) => {
  searchByName(e, 'movies')
})
let arrayItem = JSON.parse(localStorage.getItem('movies'))
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
