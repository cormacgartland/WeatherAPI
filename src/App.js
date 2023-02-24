import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather'
import Header from './components/Header'
// import Dropdown from './components/Dropdown';


const API_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY = ''

function App() {

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [city, setCity] = useState('');
  const [date, setDate] = useState(null);
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [condition, setCondition] = useState('');
  const [tempMin, setTempMin] = useState(null);
  const [tempMax, setTempMax] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [wind, setWind] =useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      
    });

    axios.get(`${API_URL}/weather?lat=${lat}&lon=${long}&units=imperial&appid=${API_KEY}`)
      .then(data => {
        console.log(data.data);
        setCity(data.data.name);
        setDate(data.data.dt);
        setTemp(data.data.main.temp);
        setFeelsLike(data.data.main.feels_like);
        setTempMin(data.data.main.temp_min);
        setTempMax(data.data.main.temp_max);
        setWind(data.data.wind.speed)
        setHumidity(data.data.main.humidity);
        setCondition(data.data.weather[0].description);
      })
  }, [lat, long])


  return (
    <div className="App">
      <Header />
      <Weather 
        city={city}
        date={date}
        temp={temp}
        feelsLike={feelsLike}
        tempMin={tempMin}
        tempMax={tempMax}
        wind={wind}
        humidity={humidity}
        condition={condition}
      />
    </div>
  );
}

export default App;
