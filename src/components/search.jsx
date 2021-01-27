import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

function Search () {
    return (
        <section className="searchbox-wrap">
            <input type="text" Placeholder="Search" className="searchBox"/>
            <RiSearchLine className="searchIcon"/>
        </section>
    )


}

export default Search;