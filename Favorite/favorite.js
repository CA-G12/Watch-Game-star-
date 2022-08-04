let btnStatus = localStorage.getItem('btnStatus') ? JSON.parse(localStorage.getItem('btnStatus')) : 'All'
function changeActive(ele){
    btnStatus = ele.textContent.trim() ;
    // Local storage
    let anime = localStorage.getItem('animes') ? JSON.parse(localStorage.getItem('animes')) : [] 
    let movies = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [] 
     
    let lovedAnime = localStorage.getItem('lovedAnime') ? JSON.parse(localStorage.getItem('lovedAnime')) : [] 
    lovedAnime = anime.filter(ele => lovedAnime.includes(ele.mal_id+''))

    let lovedMovies = localStorage.getItem('lovedMovies') ? JSON.parse(localStorage.getItem('lovedMovies')) : [] 
    lovedMovies = movies.filter(ele => lovedMovies.includes(ele.id + ''))

    if(document.querySelector('.btn-active')){
        document.querySelector('.btn-active').classList.toggle('btn-active')
    }
    ele.classList.add('btn-active')
    document.querySelector('.cards-container').innerHTML = ''

    if(ele.textContent == 'Anime'){
        renderDom(lovedAnime)
    }else if(ele.textContent == 'Movies'){ 
       renderDom(lovedMovies)
    }else{
        renderDom(lovedAnime.concat(lovedMovies))
    }


}

let anime = localStorage.getItem('animes') ? JSON.parse(localStorage.getItem('animes')) : [] 
let movies = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [] 
let lovedAnime = localStorage.getItem('lovedAnime') ? JSON.parse(localStorage.getItem('lovedAnime')) : []
let lovedMovies = localStorage.getItem('lovedMovies') ? JSON.parse(localStorage.getItem('lovedMovies')) : [] 
lovedAnime = anime.filter(ele => lovedAnime.includes(ele.mal_id+''))
lovedMovies = movies.filter(ele => lovedMovies.includes(ele.id + ''))



renderDom(lovedAnime.concat(lovedMovies))




function renderDom(arr){
    document.querySelector('.cards-container').innerHTML = ''
    arr.forEach(ele => {
        document.querySelector('.cards-container').appendChild(createCard(ele))
    })
}

function saveId(icon){
    let anime = localStorage.getItem('animes') ? JSON.parse(localStorage.getItem('animes')) : [] 
    let movies = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [] 
    let lovedMovies = localStorage.getItem('lovedMovies') ? JSON.parse(localStorage.getItem('lovedMovies')): []
    let lovedAnime = localStorage.getItem('lovedAnime')? JSON.parse(localStorage.getItem('lovedAnime')) : []

    if(lovedMovies.includes(icon.id)){
        lovedMovies = lovedMovies.filter(ele => ele != icon.id)
        localStorage.setItem('lovedMovies',JSON.stringify(lovedMovies))
        icon.classList.remove('loved')
        lovedMovies = movies.filter(ele => lovedMovies.includes(ele.id + ''))
        if(btnStatus == 'All'){
            lovedAnime = anime.filter(ele => lovedAnime.includes(ele.mal_id + ''))
            renderDom(lovedAnime.concat(lovedMovies))
        }else{
            renderDom(lovedMovies)
        }
        
    }else{
        lovedAnime = lovedAnime.filter(ele => ele != icon.id)
        localStorage.setItem('lovedAnime',JSON.stringify(lovedAnime))
        icon.classList.remove('loved')
        lovedAnime = anime.filter(ele => lovedAnime.includes(ele.mal_id + ''))

        if(btnStatus == 'All'){
            lovedMovies = movies.filter(ele => lovedMovies.includes(ele.id + ''))
            renderDom(lovedAnime.concat(lovedMovies))
        }else{
            renderDom(lovedAnime)
        }
    }
}

