
function changeActive(ele){

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
    console.log(icon.id)
    let lovedMovies = localStorage.getItem('lovedMovies') ? JSON.parse(localStorage.getItem('lovedMovies')): []
    let lovedAnime = localStorage.getItem('lovedAnime')? JSON.parse(localStorage.getItem('lovedAnime')) : []

    let allItem = lovedAnime.concat(lovedMovies)
    if(!allItem.includes(icon.id)){
        allItem = addToArr(allItem,icon.id);
        icon.classList.add('loved')
    }else{
        allItem =  allItem.filter(ele => ele != icon.id)
        icon.classList.remove(['loved'])
    }
    localStorage.setItem('allItem',JSON.stringify(allItem)) 

}

