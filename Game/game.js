let animeUrl = 'https://api.jikan.moe/v4/anime'
fetchingMovie(animeUrl, (data) => {
  const animeArr = data.data
  console.log(animeArr[0].url)

  localStorage.setItem('animes', JSON.stringify(animeArr))
  animeArr.forEach((ele) => {
    document.querySelector('.cards-container').appendChild(createCard(ele))
  })
})
function saveId(icon) {
  console.log(icon.id)
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
