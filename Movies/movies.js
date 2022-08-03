const movieUrl =
  'https://yts.mx/api/v2/list_movies.json?page=501&limit=50&api_key=7779a67355fa280acccffd8e56db02d1'

const serachInput = document.querySelector('.headerHome input[type="search"]')

fetchingMovie(movieUrl, ({ data }) => {
  const moviesArr = data.movies
  localStorage.setItem('movies', JSON.stringify(moviesArr))
  moviesArr.forEach((ele) => {
    document.querySelector('.cards-container').appendChild(createCard(ele))
  })
})

serachInput.addEventListener('keyup', searchByName)

function searchByName(e) {
  let title = e.target.value
  let serachedArr = search(JSON.parse(localStorage.getItem('movies')), title)
  document.querySelector('.cards-container').innerHTML = ''
  serachedArr.forEach((ele) => {
    document.querySelector('.cards-container').appendChild(createCard(ele))
  })
}

function createCard(ele) {
  let flipCard = document.createElement('div')
  flipCard.classList.add(['flip-card'])

  let flipCardInner = document.createElement('div')
  flipCardInner.classList.add(['flip-card-inner'])

  let flipCardFront = document.createElement('div')
  flipCardFront.classList.add(['flip-card-front'])

  let cardImg = document.createElement('img')
  cardImg.setAttribute('src', ele.medium_cover_image)
  cardImg.setAttribute('alt', ele.title)

  flipCardFront.appendChild(cardImg)

  let flipCardBack = document.createElement('div')
  flipCardBack.classList.add(['flip-card-back'])

  let icon = document.createElement('i')
  icon.classList.add(['fa-solid'])
  icon.classList.add(['fa-star'])
  icon.setAttribute('id', ele.id)
  icon.setAttribute('onclick', 'saveId(this)')

  let lovedMovies = localStorage.getItem('lovedMovies')
    ? JSON.parse(localStorage.getItem('lovedMovies'))
    : []
  if (lovedMovies.includes(ele.id + '')) {
    icon.classList.add(['loved'])
  }

  let cardTitle = document.createElement('h2')
  cardTitle.classList.add(['card-title'])
  cardTitle.textContent = ele.title

  let cardSummary = document.createElement('p')
  cardSummary.classList.add('card-summary')
  cardSummary.textContent = ele.summary

  let genres = document.createElement('p')
  genres.innerHTML = `Genres : <span>${ele.genres[0]}</span>`

  let btn = document.createElement('button')
  let btnLink = document.createElement('a')
  btnLink.href = ele.url
  btnLink.target = 'blank'
  btnLink.innerHTML = `Download Now <i class="fa-solid fa-download"></i>`

  btn.appendChild(btnLink)

  flipCardBack.appendChild(icon)
  flipCardBack.appendChild(cardTitle)
  flipCardBack.appendChild(cardSummary)
  flipCardBack.appendChild(genres)
  flipCardBack.appendChild(btn)

  flipCardInner.appendChild(flipCardFront)
  flipCardInner.appendChild(flipCardBack)

  flipCard.appendChild(flipCardInner)

  return flipCard
}
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
