import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero-section/Hero';






function App() {
  
  return (
   
   <MuiThemeProvider>
      <div>
        <Navbar />
        
      </div>
   </MuiThemeProvider>
  
  )
}

export default App;
