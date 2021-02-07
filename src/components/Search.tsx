import React from 'react'

const Search = ({search, searchInputRef, handleSearch}) => {
    
    return (
        <div>
            <input type="text" value={search}
                ref={searchInputRef}
                onChange={handleSearch} />

        </div>
    )
}

export default Search
