import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
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
  constructor() {
    super();
    this.state = {
      city: null,
    }
  }

  handleSelectionLocation = (city) => {
    this.setState({city});
    console.log(`HandleSelectionLocation ${city}`);
  }
  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='Weather Location'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities = {cities} onSelectedLocation = {this.handleSelectionLocation}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper zdepht={4}>
                <div className="detail">
                {
                  city === null ? null :
                  <ForecastExtended city = { city }/>
                }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
      /*<MuiThemeProvider>
        <div className="App">
          <LocationList cities = {cities} onSelectedLocation = {this.handleSelectionLocation}/>
        </div>
      </MuiThemeProvider>*/
    );
  }
}

export default App;
