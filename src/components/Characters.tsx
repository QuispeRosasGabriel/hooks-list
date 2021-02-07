import React, {
    useState,
    useReducer,
    useMemo,
    useRef,
    useCallback
} from 'react'
import { ADD_TO_FAVORITES, API } from '../global/Types';
import { useCharacter } from '../hooks/useCharacter';
import Search from './Search';

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

    const [search, setSearch] = useState<string>('');
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    const searchInputRef = useRef<any>(null);
    const characters = useCharacter(API);

    /*const handleSearch = () => {
        setSearch(searchInputRef?.current?.value);
    };*/

    const handleSearch = useCallback(
        () => {
            setSearch(searchInputRef?.current?.value);
        },
        [],
    )

    const handleClick = (favorite: any) => {
        dispatch({ type: ADD_TO_FAVORITES, payload: favorite });
    }

    //const filteredUsers = 
    //characters.filter((character:any) => character.name.toLowerCase().includes(search.toLowerCase())); 

    const filteredUsers = useMemo(() =>
    characters?.filter((character: any) => character.name.toLowerCase().includes(search.toLowerCase()))
        , [characters, search]);


    return (
        <div>
            {favorites.favorites.map((favorite: any) => (
                <li key={favorite.id}>
                    {favorite.name}
                </li>
            ))}

            <Search search={search} searchInputRef={searchInputRef} handleSearch={handleSearch} />
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
