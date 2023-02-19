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
// import Home from '../sort/Home';
import Filter from '../filter/Filter';
// import TuneIcon from '@mui/icons-material/Tune';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Navbar(props){
  
  
  // Modify the state of the App component with the values obtained here

    console.log(props.text);
   
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
              sx={{ mr: 2 }}>
            
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
                name={props.text} value={props.text}
                onChange={(e) => props.onTextChange(e)}
                fullWidth={true}/>
            </Search>
  
  
  
  
  
        </Toolbar>
        </AppBar>
          
      </div>
    
    )
  
}

export default Navbar;
