const config = {
    baseUrl : "https://pokeapi.co/api/v2/pokemon"
}

function fetchPokeList(){
    return fetch(`${config.baseUrl}?offset=0`)
}

function fetchPokeInfo(slug){
    return fetch(`${config.baseUrl}/${slug}/`)
}

export {
    fetchPokeList,
    fetchPokeInfo
}