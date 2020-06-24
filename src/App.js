import React, { Component } from 'react';
import  Cards  from './components/Cards/Cards'
import  Chart  from './components/Chart/Chart'
import  CountryPicker from './components/CountryPicker/CountryPicker'

import { fetchData } from './api/index'

import './App.css'

class App extends Component {

  state = {
    data: {}
  }

 async componentDidMount() {

    const fetchedData = await fetchData()
      
     this.setState({data: fetchedData})
     
  }

  

 render() {

   const { data } = this.state
  return (
    <div className="container">
      <Cards data={data} />
      <Chart />
      <CountryPicker />
    </div>
  );
 }
  
}

export default App;
