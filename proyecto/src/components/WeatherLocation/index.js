import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
/*import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from '../../constant/weathers';*/

const api_key = '5fb190f71d8c25c51105325c05987710';
/*const city = 'Santiago, scl';*/
const url = 'http://api.openweathermap.org/data/2.5/weather'

/*const data1 = {
    temperature: 12,
    weatherState: RAIN,
    humidity: 59,
    wind: '10 m/s',
}*/
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
    constructor ({city}) {
        // invoca métodos existenes de un padre (data1, data2)
        super();
        // toma el estado del componente en ese punto de tiempo
        // set.state los puede setear y entregarle datos nuevos
        this.state = {
            city,
            data: null
        }
        console.log('Constructor');
    }

    componentWillMount() {
        //console.log('ComponentWillMount');
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
        fetch(api_weather)
        .then(data => {
            console.log(data);
            return data.json();
        })
        .then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });
        })
    }

    /*componentDidMount() {
        console.log('ComponentDidMount');
    }

    componentWillUpdate() {
        console.log('ComponentWillUpdate');
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate');
    }*/

    render = () => {
        console.log('Render');
        const { city, data } = this.state;
        return(
        <div>
            <Location city = {this.state.city}/>
            { data !== null ?
                <WeatherData data = { data }/> : <CircularProgress size={60} thickness={7} />
            }
        </div>
        )
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
}

export default WeatherLocation;