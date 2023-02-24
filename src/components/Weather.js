import React from 'react'
import './Weather.css'

const Weather = ({city, date, temp, feelsLike, tempMin, tempMax, wind, humidity, condition}) => {
    const [convert, setConvert] = React.useState({f: 0, c: 0});

    const convertToCelsius = () => {
        setConvert(!convert)
      }

    return (
        <div>
            <div className="container">
                <div className="card-parent">
                    <p className="card-header">
                        {city}
                    </p>       
                    <p className="card-date">
                        {new Date(date * 1000).toLocaleDateString('en-IN')}
                    </p>

                    {/* Temperature */}
                    {convert ? <p className="card-child">
                        Temperature: {Math.round(temp)}°F
                    </p>
                    : <p className="card-child">
                        Temperature: {Math.round((Math.round(temp) - 32) * .5559)}°C
                    </p>}
                    
                    {/* Feels like */}
                    {convert ?
                    <p className="card-child">
                        Feels like: {Math.round(feelsLike)}°F
                    </p>
                    : <p className="card-child">
                        Feels like: {Math.round((Math.round(feelsLike) - 32) * .5559)}°C
                    </p>}
                    
                    {/* Low */}
                    {convert ? 
                    <p className="card-child">
                        Low: {Math.round(tempMin)}°F
                    </p>
                    : <p className="card-child">
                        Low: {Math.round((Math.round(tempMin) - 32) * .5559)}°C
                    </p>}

                    {/* High */}
                    {convert ?
                    <p className="card-child">
                        High: {Math.round(tempMax)}°F
                    </p>
                    : <p className="card-child">
                        High: {Math.round((Math.round(tempMax) - 32) * .5559)}°C
                    </p>}

                    {/* The rest */}
                    <p className="card-child">
                        Wind speed: {Math.round(wind)} MPH
                    </p>
                    <p className="card-child">
                        Humidity: {humidity}%
                    </p>
                    <p className="card-child">
                        Condition: {condition}
                    </p>
                    <button className='cel-button' onClick={convertToCelsius}>Convert C/F</button>
                </div>
            </div>
        </div>
    )
}

export default Weather;
