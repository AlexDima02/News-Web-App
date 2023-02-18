import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './news.css'
import Grid from '@mui/system/Unstable_Grid/Grid';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';




// Generating the news card results and customizing them
// Take a variable that can generate the card elements

class NewsResults extends Component {
  


  render() {
    
   
    let newsArticles;
    const articles = this.props.articles;
    
    // Modify the date format
    
   
    // Verify if the data from the navbar is received
    if(articles){
      
    
      
      newsArticles = (

            
            
            <Grid container spacing={8} marginTop={5}>
              
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
      <div className='container'>
        
        {/* Display data from the api into the cards  */}
        {newsArticles}
        
        
      </div>
    )
  }
}

NewsResults.propTypes = {

  articles: PropTypes.array.isRequired


}

export default NewsResults;

// Make pagination work
// Make them responsive and clean
// Build a sort component that is dependednt on the newsresults
// Make a filter component dependent on the newsResults component 