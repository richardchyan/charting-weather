import React, { useState, useEffect } from 'react';
import Geocode from 'react-geocode'

Geocode.setApiKey("AIzaSyDp4os33WF6-4d-xFVyL0HsUUHN7dOml_w");

   // google maps api
   // api key: AIzaSyDp4os33WF6-4d-xFVyL0HsUUHN7dOml_w

function GeoForm({ setLatLong }){

   const [value, setValue] = useState('Toronto')
   
   const getLatLong = (address) => {
      Geocode.fromAddress(address).then(response => {
         const { lat, lng } = response.results[0].geometry.location
         console.log(response)
         console.log(lat, lng)
         setLatLong({ lat, lng})
      })
   }
   
   useEffect(() => {
      getLatLong(value)
   }, [])
   
   function handleSubmit(e){
      e.preventDefault()
      getLatLong(value)
   }
   
   return (
      <>
      <form className="max-w-screen-lg m-auto py-4" onSubmit={handleSubmit}>
         <div className="px-10 py-2">Enter a city name to search. Add state, province, or country name to increase specificity</div>
         <input
         type="text"
         value={value}
         onChange={(e) => setValue(e.target.value)}
         className="px-3 py-2 border-2 border-black rounded w-1/2 text-center"
         />
         <button className="rounded px-3 py-2 bg-blue-500 text-white border-2 border-black">Submit</button>
      </form>
      </>
   );
   
   }

export default GeoForm