import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material';
import axios from 'axios';
import Grid from '@mui/system/Unstable_Grid/Grid';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

// After each next page a value is outputed 
// If the value exists
// Create an api to be called after you click on each page
// If the array has already displayed first 10 items, display the next 10 items on the next page and so on
// Check if the first 10 items were already displayed


function PageSlider(props){

  const [page, setPage] = React.useState(1);
  const [arr, arr2] = React.useState([]);
  // let arr;
  // let arr2;
  let built = (<Grid container spacing={8} marginTop={5}>
              
    {arr.map(time => (
      
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

  
  </Grid>)

  // Calling the api            
  const handleChange = (event, value) => {

    setPage(value);

    axios.get(`${props.url}?q=${props.search}&apiKey=${props.api}&pageSize=${props.quantity}&language=en`)
        .then((res) => {
          switch(value){
    
            case 2:
            // Split the array and print the output according to that array
            // Same array but splited to show the correct data
            arr2(arr2.splice(0, 10));
            arr2(res.data.articles);
           
            break;
            case 3:
            // Split the array and print the output according to that array
            // Same array but splited to show the correct data
            
            break;
            case 4:
            // Split the array and print the output according to that array
            // Same array but splited to show the correct data
           
            break;
            case 5:
            // Split the array and print the output according to that array
            // Same array but splited to show the correct data
           
            break;
            case 6:
            // Split the array and print the output according to that array
            // Same array but splited to show the correct data
          
            break;
            case 7:
            // Split the array and print the output according to that array
            // Same array but splited to show the correct data
         
            break;
          
          
          }
            
    
          }).catch((err) => {
    
            alert(err);
    
  });

  console.log(arr2);
   
  

  }

// Take the generated array from the api and slice it into a new array depending on the value of pagination
// Take first 10 items from it every time the value clicked is 2 

// For every value that exists print the output according to the splited array










// I want to get the 100 items from the api and then after depending on the button value i want to display first 10 items second 10 items third 10 items
// We need to take the first 10 items and display it and then the next 10 items from that array and then the next 10 items unitl it is nothing in that array
// From the newly created array get the data and display it

           
     
  
   

  
  return (
    <div>

      <Pagination count={10} onChange={handleChange}/>
    {built}

    </div>
  )

  
}

export default PageSlider;