import React, { Component, useState } from 'react'
import './hero.css';
import NewsResults from '../../components/newsResults/NewsResults';
import { Pagination } from '@mui/material';



function Hero(props){
   
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage, setPostPerPage ] = useState(10); 

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = props.data.slice(firstPostIndex, lastPostIndex);
  
  console.log(currentPage);  


  const changePage = (e, p) => {

    
      console.log(e, p);
      setCurrentPage(p);
  
  }

  

   


    return (
      <div className='container-grid'>
        <NewsResults  data={currentPosts} />
        {/* This should be the pagination that is dependent on Hero section */}
        <div className='pagination-container'>
          <Pagination count={10} variant="outlined" shape="rounded" onChange={changePage}></Pagination>
        </div>
      </div>
    )
  
}

export default Hero;