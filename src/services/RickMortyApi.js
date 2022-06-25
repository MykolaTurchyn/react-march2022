let getCharacters= () =>{

    return fetch('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6]')
        .then(value => value.json())

}

export {getCharacters}