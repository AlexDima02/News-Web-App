import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './pages/Hero-section/Hero';
import axios from 'axios';
import Filter from './components/filter/Filter'



class App extends React.Component{
  constructor(){
    super();
    
    this.state = {

      // Get Api when i search for a specific topic  
        searchText: '',
        amount: 100,
        topics: [],
        minDate:'',
        maxDate:'',
        active: false,
        // Sort fetched data
        order: '',
        container: [],

    }
   
    this.onTextChange = this.onTextChange.bind(this);
    this.filterThings = this.filterThings.bind(this);

  }

  onTextChange = (e) => {

    this.setState({searchText: e.target.value}, async () => {

        console.log(this.state);
        // axios.get(`${this.state.apiUrl}?q=${this.state.searchText}&apiKey=${this.state.apiKey}&pageSize=${this.state.amount}&language=en&from=${this.state.minDate}&to=${this.state.maxDate}`)
        // .then((res) => {
  
        //   console.log(res);
          
        //   this.setState({topics: res.data.articles});
  
        // }).catch((err) => {
  
        //   console.log(err);
  
        // });
        // Pass parameters from state to the backend url dinamically 
        let obj = this.state.searchText;
        let minDate = this.state.minDate;
        let maxDate = this.state.maxDate;
        let amount = this.state.amount;
        if (obj) { // this will never be `undefined`
          // create query parameters
          const params = new URLSearchParams({ obj, minDate, maxDate, amount });
          // send the request
          const res = await fetch(`https://news-web-app-backend.onrender.com/newsCreate?${params}`);
          if (!res.ok) {
            throw new Error(`${res.status}: ${await res.text()}`) ;
          }
      
          const data = await res.json();
          this.setState({topics: data.articles});
          
          
          
        }
  
    });

   
  }

  filterThings = (e) => {

      
  
    // Try to call the api from the navbar with the min and max from the filter updated
    // It works only if you filter first and then search for something
    
    if(e.target.name == 'minDate'){
      e.stopPropagation();
      console.log(e.target.name);
      this.setState({minDate: e.target.value}, () => {
        console.log(this.state.minDate);
        


      });
      
  
    }else{
      e.stopPropagation();
      this.setState({maxDate: e.target.value}, () => {
       
        console.log(this.state.maxDate);


      });


    }
    
  
  
  }

  sortThings(e){
      
  
        // Check if the option is old and sort the data ascending and change the state to ascendend
      if(e.target.value === 'old'){
            
           
        // Sort asc
        const sortAsc = () => this.state.topics.sort((a,b)=>{
          return new Date(a.publishedAt) - new Date(b.publishedAt);
        })

        sortAsc();
            
        // Sort desc
        this.setState({order: 'desc'});
           
    
      }else{
            
            
        const sortDesc = () => this.state.topics.sort((a,b)=>{
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        })
  
        sortDesc();
  
           
        this.setState({order: 'asc'});
          
          
      }

            
           
  }

  
  render(){
    console.log(this.state.topics);
    return (
   
      <MuiThemeProvider>
           <div>
             <Navbar text={this.state.searchText} onTextChange={this.onTextChange} />
             <div className='container-hero'>
            {/* Extracting the data from api into another array that we can manipulate in other component */} 
              <div className='menu-options'>
                <div className='filter-dropdown'>
                  
                    {/* Filter component that give the data to the navbar state */}
                    {/* Customized in the sort component */}
                    <Filter max={this.state.maxDate} min={this.state.minDate} func={this.filterThings}></Filter>
                    <div className='sort-dropdown'>
              
                      <span className='sort-parameter'>Sort by:</span>
                      <select onChange={(e) => this.sortThings(e)} id="param-select">
                          <option value="">Please choose an option</option>
                          <option value="new">Newest first</option>
                          <option value="old">Oldest first</option>
                      </select>
            
                    </div>
                </div>
                
                
              </div>
            
           
                <Hero data={this.state.topics}/>
            </div>
           </div>
      </MuiThemeProvider>
       
    )

  }

}

export default App;
