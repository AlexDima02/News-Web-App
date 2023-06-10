import React, { useState } from 'react'
import { Pagination } from '@mui/material';
import NewsResult from './components/NewsResult/NewsResult';
import Sort from '../../components/Sort/Sort';
import Filter from '../../components/Filter/Filter';
import SearchBar from '../../components/SearchBar/SearchBar';
import '/src/App.css'

function Home({data, maxDate, minDate, filterThings, sortThings, onTextChange, text}) {

    console.log(data)

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage, setPostPerPage ] = useState(10); 

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data?.slice(firstPostIndex, lastPostIndex);
  
    console.log(currentPosts);  


    const changePage = (e, p) => {

        
        console.log(e, p);
        setCurrentPage(p);
    
    }

    

  return (
    <div>
        <div className='presentation-section'>
            <div className='black-overlay'></div>
            <img src="./src/assets/markus-winkler-k_Am9hKISLM-unsplash.jpg" alt="" />
            <div className='search-bar-wrapper'>
                <h1>I am interested in...</h1>
                <SearchBar onTextChange={onTextChange} text={text}/>
            </div>
        </div>
        <div className='hero-section'>

            <div className='menu-container'>
                <div className='menu-options'>
                        
                        <div className='filter-dropdown'>
                        
                            {/* Filter component that give the data to the navbar state */}
                            {/* Customized in the sort component */}
                            {/* <Filter max={this.state.maxDate} min={this.state.minDate} func={this.filterThings}></Filter> */}
                            <Filter max={maxDate} min={minDate} filterThings={filterThings}/>
                        
                        </div>

                </div>

                <div className='sort'>
                    <Sort sortThings={sortThings} />
                </div>
            </div>

            <div className='news-posts'>
                {data ? <NewsResult  data={currentPosts}/> : null}
            </div>

            <div className='pagination-component'>
                <Pagination count={10} variant="outlined" shape="rounded" onChange={changePage}/>
            </div>

        </div>

    </div>
  )

}

export default Home;