import React, { useState, useEffect, useReducer, useMemo } from 'react'
import { ADD_TO_FAVORITES } from '../global/Types';

const initialState = {
    favorites: [],
};

const favoriteReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
            break;

        default:
            return state;
    }
}

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState<string>('');
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    const handleSearch = (ev: any) => {
        setSearch(ev.target.value);
    };

    const handleClick = (favorite: any) => {
        dispatch({ type: ADD_TO_FAVORITES, payload: favorite });
    }

    //const filteredUsers = 
    //characters.filter((character:any) => character.name.toLowerCase().includes(search.toLowerCase())); 

    const filteredUsers = useMemo(() =>
        characters.filter((character: any) => character.name.toLowerCase().includes(search.toLowerCase()))
        , [characters, search]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(resp => resp.json())
            .then(resp => setCharacters(resp.results));
    }, []);


    return (
        <div>
            {favorites.favorites.map((favorite: any) => (
                <li key={favorite.id}>
                    {favorite.name}
                </li>
            ))}

            <div>
                <input type="text" value={search} onChange={handleSearch} />
            </div>

            {filteredUsers?.map((character: any) => (
                <div key={character.id}>
                    <h2>{character?.name}</h2>
                    <button type="button" onClick={() => handleClick(character)}>Agregar a favorito</button>
                </div>
            ))}
        </div>
    )
}

export default Characters
