let arrayItem = JSON.parse(localStorage.getItem('animes'))
arrayItem.forEach((ele) => {
  document.querySelector('.cards-container').appendChild(createCard(ele))
})

let arrRondom = []
function saveId(icon) {
  let lovedAnime = localStorage.getItem('lovedAnime')
    ? JSON.parse(localStorage.getItem('lovedAnime'))
    : []
  if (!lovedAnime.includes(icon.id)) {
    lovedAnime = addToArr(lovedAnime, icon.id)
    icon.classList.add('loved')
  } else {
    lovedAnime = lovedAnime.filter((ele) => ele != icon.id)
    icon.classList.remove(['loved'])
  }
  localStorage.setItem('lovedAnime', JSON.stringify(lovedAnime))
}

serachInput.addEventListener('keyup', (e) => {
  searchByName(e, 'animes')
})
slider(arrayItem, arrRondom)

createSliderItem(arrRondom)
