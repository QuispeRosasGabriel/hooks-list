import React, { useState } from 'react'

const Header = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
 
    return (
        <div className="Header">
            <h1>React Hooks</h1>
            <button type="button">DarkMode</button>
        </div>
    )
}

export default Header
