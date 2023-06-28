import React from 'react'
import './search-bar.css'

function SearchBar({text, onTextChange}) {




  return (
    <>
        <input type="text" className='search-bar-input' onChange={(e) => onTextChange(e)}/>
        
    </>
  )
}

export default SearchBar;