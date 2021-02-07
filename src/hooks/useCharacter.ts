import { useState, useEffect } from "react";

export const useCharacter = (url: string) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setCharacters(data.results))
    }, [url]);

    return characters;
};