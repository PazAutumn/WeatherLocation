import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ( { weekDay, hour, data } ) => (
  <div>
    <div>{ weekDay } hora: { hour }</div>
    <WeatherData data = { data } />
  </div>
)

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
  })
}

export default ForecastItem;