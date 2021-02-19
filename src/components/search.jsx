import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

function Search (props) {
    return (
        <section className="searchbox-wrap">
            <input 
                type="text" 
                Placeholder="Search..." 
                className="searchBox"
                value={props.value}
                onChange = {(event)=> props.setSearchValue(event.target.value)}
                />
            <RiSearchLine className="searchIcon"/>
        </section>
    )


}

export default Search;