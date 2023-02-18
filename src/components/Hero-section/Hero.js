import React, { Component } from 'react'
import './hero.css';
import NewsResults from '../newsResults/NewsResults';




class Hero extends Component {
    constructor(props){
        super(props);


    }

  

  render() {
    return (
      <div className='container'>
        <NewsResults />
        
      </div>
    )
  }
}

export default Hero;