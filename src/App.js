import React, { Component } from 'react'
import "./App.css";
import Navbar from './Components/navbar/navbar';
import TourList from "./Components/Tourlist"
 class App extends Component {
  render() {
    return (
     <React.Fragment>
      <Navbar></Navbar>
      <TourList></TourList>
     </React.Fragment>
    )
  }
}

export default App;