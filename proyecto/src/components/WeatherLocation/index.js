import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from '../../constant/weathers';

const api_key = '5fb190f71d8c25c51105325c05987710';
const location = 'Buenos Aires, AR';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;

const data1 = {
    temperature: 12,
    weatherState: RAIN,
    humidity: 59,
    wind: '10 m/s',
}
/*
const data2 = {
    temperature: -1,
    weatherState: SNOW,
    humidity: 89,
    wind: '70 m/s',
}*/

/*
const WeatherLocation = () => (
    <div>
        <Location city = {'Santiago'}/>
        <WeatherData data = {data}/>
    </div>
)*/

class WeatherLocation extends Component {
    constructor () {
        // invoca métodos existenes de un padre (data1, data2)
        super();
        // toma el estado del componente en ese punto de tiempo
        // set.state los puede setear y entregarle datos nuevos
        this.state = {
            city: 'Santiago',
            data: data1
        }
    }
    getWeatherState = (weather) => {
        return SUN;
    }

    getData = (weather_data) => {
        const {humidity, temp} =  weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);
        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }
        return data;
    }
    handleUpdateClick = () => {
        /* this.setState({
            city: 'Santiago',
            data: data2
        })*/
        fetch(api_weather)
        .then(data => {
            console.log(data);
            return data.json();
        })
        .then(weather_data => {
            const data = this.getData(weather_data);
            this.setState({ data });
        })
        console.log('Actualizado')
    }
    render = () => (

        <div>
            <Location city = {this.state.city}/>
            <WeatherData data = {this.state.data}/>
            <button onClick = {this.handleUpdateClick}>Actualizar</button>
        </div> 
    )
}

export default WeatherLocation;