import React from 'react'
import './styles/sort.css'

function Sort({sortThings}) {





  return (
    <div className='sort-dropdown'>
        <span className='sort-parameter'>Sort by:</span>
        <select onChange={(e) => sortThings(e)} id="param-select">
            <option value="">Please choose an option</option>
            <option value="new">Newest first</option>
            <option value="old">Oldest first</option>
        </select>
    </div>
  )
}


export default Sort;
