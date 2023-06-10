import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid';
import './news.css'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function NewsResult({data}) {
  return (
    <>
        <Grid container spacing={{ xs: 8, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} marginLeft={2}  marginRight={2} rowSpacing={8}>
              
              {data?.map(article => (
                
                <Grid item xs={4}>
                 
                        <a href={article.url}>       
                            <div className='grid-item'> 
                            
                            
                                <div className='card-image'>
                                    <img src={article.urlToImage} alt=''/>
                                </div>
                                <br/>
                                <br/>
                                <span>{new Date(article.publishedAt).toLocaleString()}</span>

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
    </>
  )
}

export default NewsResult;