
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
