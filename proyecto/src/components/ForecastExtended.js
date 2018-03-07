import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

class ForecastExtended extends Component {
  renderForecastItemDays() {
    return days.map(day => (<ForecastItem key={day} weekDay={day}/>))
      /*<ForecastItem weekDay={'miercoles'}/>*/
  }

  render() {
    const { city } = this.props;
    return (
      <div>
        <h2 className="forecastTitle">Pronóstico extendido para { city }</h2>
        {this.renderForecastItemDays()}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;