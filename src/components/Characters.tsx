import React, { useState, useEffect } from 'react'

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(resp => resp.json())
            .then(resp => setCharacters(resp.results));
    }, []);


    return (
        <div>
           {characters.map((character) => (
               <h2>{character?.name}</h2>
           ))}
        </div>
    )
}

export default Characters
