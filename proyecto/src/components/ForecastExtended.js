import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';

/*const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const data = {
  temperature: 10,
  humidity: 10,
  weatherState: 'normal',
  wind: 'normal'
}*/
const api_key = '5fb190f71d8c25c51105325c05987710';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {

  constructor() {
    super();
    this.state = {
      forecastData: null
    }
  }

  componentDidMount() {
    const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
    fetch(url_forecast).then(data => (data.json())
      ).then(weather_data => {
        console.log(weather_data);
        const forecastData = transformForecast(
          weather_data);
        console.log(forecastData);
        this.setState({forecastData})
      })
  }

  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForecastItem key = {`${forecast.weekDay}${forecast.hour}`} weekDay = {forecast.weekDay} hour = { forecast.hour } data = { forecast.data } />
    ))

    /*return days.map( day => ( <ForecastItem key = { day } weekDay = { day } hour = { 10 } data = { data } /> ))*/
    
    /*<ForecastItem weekDay={'miercoles'}/>*/
  }

  renderProgress = () => {
    return (<h3>Cargando pronóstico extendido...</h3>);
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecastTitle">Pronóstico extendido para { city }</h2>
        {forecastData !== null ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;