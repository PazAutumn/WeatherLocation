import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
// import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from '../../../constant/weathers';
import './styles.css'

const WeatherData = ({ data }) => {
    const {temperature, weatherState, humidity, wind} = data;
    return (
        <div className = 'weatherDataCont'>
            <WeatherTemperature temperature = {temperature} // cambio el parámetro a 'waater', tira una advertencia
            weatherState = {weatherState}/>
            <WeatherExtraInfo humidity = {humidity} wind = {wind}/>
        </div>
        )
}
// una variable dentro de mi componente

WeatherData.propTypes = {
    // shape valida un objeto y sus propiedades en el interior.
    // Dentro de data, temperature se validadará para ser un number
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WeatherData;