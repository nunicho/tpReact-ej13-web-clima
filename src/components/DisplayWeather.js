import React from 'react'
import './displayweather.css'

function DisplayWeather(props) {
    const {data} = props;
    console.log(data);


const iconurl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`

// const iconurl = "http://openweathermap.org/img/wn/"+`${data.weather[0].icon}`+".png"

  return (
    <div className="displayweather">
        <div className="maincard">
            <span className="cardtitle">
                {data.name}, {data.sys.country}. Weather
             </span>
            <span className="cardsubtitle">
                As of {new Date().toLocaleTimeString()}
            </span>
            <h1>{Math.floor(data.main.temp - 273.15)}
            <sup>o</sup>
            </h1>
            <span className="weather-main">
                {data.weather[0].main}
            </span>
            <img src={iconurl} className="weather-icon" alt=""></img>
            <span className="weather-description">
                {data.weather[0].description}
            </span>
        </div>
        <div className="weatherdetails">
            <div className="section1">
                <table>
                <tr>
                    <td>
                        <h4>High/Low</h4>
                    </td>
                </tr>

                </table>

            </div>


        </div>


    </div>
  )
}

export default DisplayWeather