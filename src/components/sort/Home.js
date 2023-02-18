import React, { Component } from 'react'
import './home.css';
import Grid from '@mui/system/Unstable_Grid/Grid';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import PageSlider from '../page-slider/PageSlider';

class Home extends Component {
    constructor(props){
        super(props);
        
        this.state = {

          order: '',
          container: [],
          
        }

        this.sortThings = this.sortThings.bind(this);
    
        
    }


    
    
    
    
  
// Transform date in a different format
// Sort the dates ascending/descending depending on the value of option
    
    sortThings(e){
      // After every new search change the state with new data from the api
        // this.setState({date: this.props.items});
        
        
       

        
        console.log(this.props.items);
            // Check if the option is old and sort the data ascending and change the state to ascendend
            if(e.target.value === 'old'){

              this.props.items.sort((a,b)=>{
                return new Date(a.publishedAt) - new Date(b.publishedAt);
              })

              this.setState({order: 'asc'});
              console.log(this.props.items);
              
              this.state.container.push(this.props.items);
              
              console.log(this.state.container);
    
    
            }else{
              // Sort the data before
              this.props.items.sort((a,b)=>{
                return new Date(b.publishedAt) - new Date(a.publishedAt);
              })
              
              // Push the modifications in the state
              this.state.container.push(this.props.items);
              // Set state
              this.setState({order: 'desc'});
              console.log(this.state.container);
            }
            
            
            
           
            
    }

    
  render() {
    
    let data = this.props.items;
    let url = this.props.url;
    let api = this.props.api;
    let search = this.props.search;
    let quantity = this.props.quantity;
    quantity = 100;

    // Variable that displays our result
    let build;
    // Convert date to a different format
    
    
    // If state is descended display decend the data
    // If state is ascend display ascend the data
    // Take the data from the state container and display it according to the order state
    if(this.state.order === 'desc'){
      
      build = (

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




      )

    
    }else if(this.state.order === 'asc'){

      build = (

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

          


      )


      
    }

    
    
   
    
    return (
      <div className='container'>
        <div className='sort-dropdown'>
          
          <span>Sort by:</span>
          <select onChange={this.sortThings} id="pet-select">
              <option value="">--Please choose an option--</option>
              <option value="new">Newest first</option>
              <option value="old">Oldest first</option>
          </select>

        {build}

        

        </div>

        <br></br>
        <br></br>
        <br></br>

      {/* Make the pagination slider component */}
        <PageSlider data={data} quantity={quantity} api={api} url={url} search={search}/>
      </div>
        
      
      
    )
    
  }
}

export default Home;