import React, { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const {color, background} = useContext(ThemeContext);

    const handleClick = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="Header">
            <h1 style={{color, background}}>React Hooks</h1>
            <button type="button"
                onClick={handleClick}
            >{!!darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    )
}

export default Header
