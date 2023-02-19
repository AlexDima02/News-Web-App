import React, { Component } from 'react'
import './hero.css';
import NewsResults from '../../components/newsResults/NewsResults';




class Hero extends Component {
    constructor(props){
        super(props);


    }

  

  render() {
    return (
      <div className='container-grid'>
        <NewsResults  data={this.props.data}/>
        {/* This should be the pagination that is dependent on Hero section */}
        {/* {this.state.topics.length > 0 ? (<Home items={this.state.topics} min={this.state.minDate} max={this.state.maxDate} quantity={this.state.amount} url={this.state.apiUrl} api={this.state.apiKey} search={this.state.searchText}/>) : null}; */}
      </div>
    )
  }
}

export default Hero;