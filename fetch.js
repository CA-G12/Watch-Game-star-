fetchingMovie = (url, cb) => {
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let data = JSON.parse(xhr.responseText)
      cb(data)
    }
  }
  xhr.open('GET', url)

  xhr.send()
}
let animeUrl = 'https://api.jikan.moe/v4/anime'
fetchingMovie(animeUrl, (data) => {
  const animeArr = data.data

  localStorage.setItem('animes', JSON.stringify(animeArr))
})

const movieUrl =
  'https://yts.mx/api/v2/list_movies.json?page=501&limit=50&api_key=7779a67355fa280acccffd8e56db02d1'

fetchingMovie(movieUrl, ({ data }) => {
  const moviesArr = data.movies
  localStorage.setItem('movies', JSON.stringify(moviesArr))
})
