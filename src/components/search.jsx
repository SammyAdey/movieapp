import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

function Search ({handleInput}) {
    return (
        <section className="searchbox-wrap">
            <input 
                type="text" 
                Placeholder="Search" 
                className="searchBox"
                onchange = {handleInput}
                />
            <RiSearchLine className="searchIcon"/>
        </section>
    )


}

export default Search;