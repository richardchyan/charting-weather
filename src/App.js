import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import GeoForm from './components/GeoForm';
import WeatherChart from './components/WeatherChart';

function App() {

  const [latLong, setLatLong] = useState(null)


  return (
    <div className="App my-8">
     <h1 className="text-4xl px-4">Search the upcoming week's lows and high temperatures (C &deg;)</h1>
     <GeoForm setLatLong={setLatLong}/>
     {latLong && <WeatherChart latLong={latLong}/>}
    </div>
  );
}

export default App;
