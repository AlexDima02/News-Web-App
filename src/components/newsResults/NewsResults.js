import React, { Component } from 'react';
import './news.css'
import Grid from '@mui/system/Unstable_Grid/Grid';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';



// Generating the news card results and customizing them
// Take a variable that can generate the card elements

function NewsResults(props){
 
    let newsArticles;
    const articles = props.data;
    
    // Modify the date format
    
   
    // Verify if the data from the navbar is received
    if(articles){
      
      newsArticles = (

            <Grid container spacing={{ xs: 8, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} marginLeft={2}  marginRight={2} rowSpacing={8}>
              
              {articles.map(article => (
                
                <Grid item xs={4}>
                 
                 <a href={article.url}>       
                    <div className='grid-item'> 
                      
                    
                        <div className='card-image'>
                        <img src={article.urlToImage} alt=''/>
                        </div>
                        <br/>
                        <br/>
                        <span>{article.publishedAt}</span>

                        <div className='card-info'>
                          <h1>{article.title}</h1>
                          <p>{article.description}</p>
                        </div>

                        <div className='action-btn'>
                          
                            <p>Find Out More<ArrowCircleRightOutlinedIcon sx={{fontSize: 40, marginLeft: 2, verticalAlign: "middle"}}/></p>
                          
                        </div>  

                              
                  
                  
                    </div> 
                  </a>
                 
                </Grid>      


              ))}

            
            </Grid>
        
      )
            
       

    }else{

        newsArticles = null;
        
    }

    
    return (
      <div>
        
        {/* Display data from the api into the cards */}
        {newsArticles}
        
        
      </div>
    )
  
}

export default NewsResults;