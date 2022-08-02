fetchingGame = (url, cb) => {
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let data = JSON.parse(xhr.responseText)
      console.log(data)
      // cb(data)
    }
  }
  xhr.open('GET', url)
  xhr.setRequestHeader(
    'x-rapidapi-host',
    'free-to-play-games-database.p.rapidapi.com',
  )
  xhr.setRequestHeader(
    'x-rapidapi-key',
    '93b272acdamsh10e28390fcb3114p1a8d21jsn6bd1fef7e35a',
  )
  xhr.send()
}
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
