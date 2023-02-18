import React, { Component, useState } from 'react';
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
// import NewsResults from '../newsResults/NewsResults';
import { Container } from '@mui/system';
import Home from '../sort/Home';
import Filter from '../filter/Filter';
// import TuneIcon from '@mui/icons-material/Tune';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


class Navbar extends Component {
  
  constructor(props){

    super(props);
    this.state = {

      // Get Api when i search for a specific topic  
     
            
        searchText: '',
        amount: 10,
        apiUrl: 'https://newsapi.org/v2/everything',
        apiKey: 'dd9fc6f879594e27987d6e1e8b05a369',
        topics: [],
        minDate:'',
        maxDate:'',
        active: false

    }

    this.onTextChange = this.onTextChange.bind(this);
    
    
  }

  onTextChange = (e) => {

    this.setState({[e.target.name]: e.target.value}, () => {

      axios.get(`${this.state.apiUrl}?q=${this.state.searchText}&apiKey=${this.state.apiKey}&pageSize=${this.state.amount}&language=en&from=${this.state.minDate}&to=${this.state.maxDate}`)
      .then((res) => {

        console.log(res);
        
        this.setState({topics: res.data.articles}).catch((err) => {

          console.log(err);

        }); 

      });

    });



}


filterThings = (e) => {

      
  
  // Try to call the api from the navbar with the min and max from the filter updated
  // It works only if you filter first and then search for something
  
  
  

  if(e.target.value){

    
    this.setState({[e.target.name]: e.target.value});
    this.setState({[e.target.name]: e.target.value});

    // this.props.min = e.target.value;
    // this.props.max = e.target.value;
   

    // min = this.state.minDate;
    // max = this.state.maxDate;
    
    console.log(this.state.minDate);
    console.log(this.state.maxDate);
    
     

    }
  


}


render(){
    
    // Search parent
    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    }));
    
    // Search icon wrapper
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }));
  
    // Search icon

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    }));


    
    

    return (

    // Building navbar elements 
      <div>
          <AppBar title='News App'>
          { /* Search box and logo */ }
          <Toolbar disableGutters>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
  
      {/* Search parent       */}
            <Search>
              {/* Search icon wrapper */}
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              {/* Search input  */}
              <StyledInputBase
                placeholder="Search…"
                name='searchText' value={this.state.searchText}
                onChange={this.onTextChange}
                fullWidth={true}/>
            </Search>
  
  
  
  
  
          </Toolbar>
          </AppBar>
          
          {/* Extracting the data from api into another array that we can manipulate in other component */}
          <Container>

          {/* Filter component that give the data to the navbar state */}
          {/* Customized in the sort component */}
            <div className='filter-dropdown'>
              

              <Filter max={this.state.maxDate} min={this.state.minDate} func={this.filterThings}></Filter>

            </div>

             
              {this.state.topics.length > 0 ? (<Home items={this.state.topics} min={this.state.minDate} max={this.state.maxDate} quantity={this.state.amount} url={this.state.apiUrl} api={this.state.apiKey} search={this.state.searchText}/>) : null};
          
          </Container>

      </div>
    
    )



  }

  
}

export default Navbar;
