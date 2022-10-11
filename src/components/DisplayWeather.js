import React from 'react'
import './displayweather.css'

function DisplayWeather(props) {
    const {data} = props;
  return (
    <div className="displayweather">
        <div className="maincard">
            <span className="cardtitle">
                {data.name}, {data.sys.country}. Weather

             </span>

        </div>


    </div>
  )
}

export default DisplayWeather