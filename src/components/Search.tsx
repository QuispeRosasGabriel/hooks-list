import React, { Props } from 'react'

const Search = ({ search, searchInputRef, handleSearch }: any) => {

    return (
        <div>
            <input type="text" value={search}
                ref={searchInputRef}
                onChange={handleSearch} />

        </div>
    )
}

export default Search
