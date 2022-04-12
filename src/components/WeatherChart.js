import React, { useState, useEffect } from 'react';
import Chartjs from 'chart.js/auto'
import { Chart, Bar } from 'react-chartjs-2'


   const days = [
   'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
   ]
 
   const labels = [...Array(7)].map((_, i) => {
      const date = new Date()
      date.setDate(date.getDate() + i)
      return days[date.getDay()]
   })
 
   console.log(labels) 
   const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely&units=metric&appid=debcfd52fd9a71e6ac749df3ac2e8ae0'
   
   const WeatherChart = ({ latLong }) => {
   
      const [datasets, setDatasets] = useState([])
   
      useEffect(() => {
      getWeatherData()
   
      async function getWeatherData(){
         const response = await fetch(`${apiURL}&lat=${latLong.lat}&lon=${latLong.lng}`)
         const data = await response.json()
         console.log(data)
         const formattedData = formatWeatherData(data)
         setDatasets(formattedData)
      }
   
      function formatWeatherData(data){
         return [
            {
            label: "Highs",
            data: data.daily.map((day) => day.temp.max),
            backgroundColor: "#fcba03",
            borderColor: "black",
            },
            {
            label: "Lows",
            data: data.daily.map((day) => day.temp.min),
            backgroundColor: '#5995da',
            borderColor: 'black'
            },
         ];
   
      }
   
      }, [latLong])
   
      return (
         <div className="max-w-screen-xl m-auto">
            <Bar 
               options= {{
                  tooltips: { mode: 'index', intersect: false}
               }}
               data={{ labels, datasets}}
            />
         </div>
      
   )
     // data={{
     //   // labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
     //   labels: labels,
     //   datasets: [
     //     {
     //       label: 'Highs',
     //       data: [5, 15, 8, 2, 14],
     //       backgroundColor: '#fcba03',
     //       borderColor: 'black'
     //     },
     //     {
     //       label: 'Lows',
     //       data: [0, 1, 1, 5, -2],
     //       backgroundColor: '#5995da',
     //       borderColor: 'black'
     //     }
     //   ]
 
     // }}
}

 export default WeatherChart