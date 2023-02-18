import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { render } from '@testing-library/react';

function PagesResults(props) {

    const data = props.data;
   

return (
    <div>
      <Grid container spacing={8} marginTop={5}>
              
              {data.map(time => (
                
                <Grid item xs={4}>
                 
                 <a href={time.url}>       
                    <div className='grid-item'> 
                      
                    
                        <div className='card-image'>
                        <img src={time.urlToImage} alt=''/>
                        </div>
                        <br/>
                        <br/>
                        <span>{time.publishedAt}</span>
      
                        <div className='card-info'>
                          <h1>{time.title}</h1>
                          <p>{time.description}</p>
                        </div>
      
                        <div className='action-btn'>
                          
                            <p>Find Out More<ArrowCircleRightOutlinedIcon sx={{fontSize: 40, marginLeft: 2, verticalAlign: "middle"}}/></p>
                          
                        </div>  
      
                              
                  
                  
                    </div> 
                  </a>
                 
                  </Grid>      
      
      
              ))}
      
            
            </Grid>
    </div>
  )

}


export default PagesResults;