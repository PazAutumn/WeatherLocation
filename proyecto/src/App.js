import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Santiago,scl',
  'Ciudad de México,mx',
  'Madrid, es',
  'Rio de Janeiro,br'
];

class App extends Component {
  handleSelectionLocation = (city) => {
    console.log('HandleSelectionLocation');
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities = {cities} onSelectedLocation = {this.handleSelectionLocation}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
