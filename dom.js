function createCard(ele) {
  let flipCard = document.createElement('div')
  flipCard.classList.add(['flip-card'])

  let flipCardInner = document.createElement('div')
  flipCardInner.classList.add(['flip-card-inner'])

  let flipCardFront = document.createElement('div')
  flipCardFront.classList.add(['flip-card-front'])

  let cardImg = document.createElement('img')
  cardImg.setAttribute(
    'src',
    ele.medium_cover_image || ele.images.jpg.large_image_url,
  )
  cardImg.setAttribute('alt', ele.title)

  flipCardFront.appendChild(cardImg)

  let flipCardBack = document.createElement('div')
  flipCardBack.classList.add(['flip-card-back'])

  let icon = document.createElement('i')
  icon.classList.add(['fa-solid'])
  icon.classList.add(['fa-star'])
  icon.setAttribute('id', ele.id || ele.mal_id)
  icon.setAttribute('onclick', 'saveId(this)')

  let lovedMovies = localStorage.getItem('lovedMovies')
    ? JSON.parse(localStorage.getItem('lovedMovies'))
    : []
  let lovedAnime = localStorage.getItem('lovedAnime')
    ? JSON.parse(localStorage.getItem('lovedAnime'))
    : []
  if (lovedMovies.includes(ele.id + '')) {
    icon.classList.add(['loved'])
  }
  if (lovedAnime.includes(ele.mal_id + '')) {
    icon.classList.add(['loved'])
  }

  let cardTitle = document.createElement('h2')
  cardTitle.classList.add(['card-title'])
  cardTitle.textContent = ele.title

  let cardSummary = document.createElement('p')
  cardSummary.classList.add('card-summary')
  cardSummary.textContent = ele.summary || ele.synopsis

  let genres = document.createElement('p')
  genres.innerHTML = `Genres : <span>${
    ele.genres[0].name || ele.genres[0]
  }</span>`

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

const serachInput = document.querySelector('.headerHome input[type="search"]')

function searchByName(e ,category){
    let title = e.target.value ;
    let serachedArr = search(JSON.parse(localStorage.getItem(category)),title) 
    document.querySelector('.cards-container').innerHTML = ''
    serachedArr.forEach(ele => {
        document.querySelector('.cards-container').appendChild(createCard(ele))
    })
function slider(arr, arrRondom) {
  for (let i = 0; i < 7; i++) {
    arrRondom.push(arr[Math.floor(Math.random() * arr.length - 1)])
  }
  console.log(arrRondom)
}
let ids = [
  'ext-1',
  'ext-2',
  'ext-3',
  'ext-4',
  'ext-5',
  'ext-6',
  'ext-7',
  'ext-8',
]
function createSliderItem(arr) {
  let slider = document.querySelector('.slider')
  slider.textContent = ''
  arr
    .filter((e) => e != undefined)
    .forEach((e, i) => {
      let imgBox = document.createElement('figure')
      let sliderImg = document.createElement('img')
      sliderImg.setAttribute('class', 'slider-img')
      imgBox.setAttribute('class', 'cont-slider')
      slider.appendChild(imgBox)
      imgBox.appendChild(sliderImg)
      imgBox.setAttribute('id', ids[i])

      sliderImg.src =
        e.medium_cover_image ||
        e.images.jpg.large_image_url ||
        'https://cdn.myanimelist.net/images/anime/6/73245l.jpg'
    })
}
setInterval(() => {
  let a = document.querySelectorAll('.cont-slider')
  ids.unshift(ids.pop())
  ids.forEach((e, i) => {
    a[i].setAttribute('id', e)
  })
  console.log(ids, a[0])
}, 2000)
