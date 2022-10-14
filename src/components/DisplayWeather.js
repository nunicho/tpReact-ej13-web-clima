import React from 'react'
import './displayweather.css'

function DisplayWeather(props) {
    const {data} = props;
    
const iconurl = `http://openweathermap.org/img/wn/${data.cod !== "404" ? data.weather[0].icon : null}.png`

// const iconurl = "http://openweathermap.org/img/wn/"+`${data.weather[0].icon}`+".png"

  return (
    <div className="displayweather">
  { data.cod !== "404" ? (
        <React.Fragment>
            <div className="maincard">
                    <p className="cardtitle">
                        {data.name}, {data.sys.country}. 
                    </p>
                    <p>
                        Información del Clima
                    </p>
                    <p className="cardsubtitle">
                        Hora: {new Date().toLocaleTimeString()}
                    </p>
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
                        <tbody>
                        <tr>
                            <td>
                                <h4>Máxima/Mínima</h4>
                            </td>
                            <td>
                                <span>
                                    {Math.floor(data.main.temp_max - 273.15)} / {" "}
                                    {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup> C
                                </span>
                            </td>
                        </tr>
                                        <tr>
                            <td>
                                <h4>Humedad</h4>
                            </td>
                            <td>
                                <span>
                                {data.main.humidity} %
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Presión</h4>
                            </td>
                            <td>
                                <span>
                                    {data.main.pressure} hPa
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Visibilidad</h4>
                            </td>
                            <td>
                                <span>
                                    {data.visibility / 1000} Km
                                </span>
                            </td>
                        </tr>
                        </tbody>
                        </table>

                    </div>
                    <div className="section2">
                        <table>
                        <tbody>
                        <tr>
                            <td>
                                <h4>Viento</h4>
                            </td>
                            <td>
                                <span>
                                    {Math.floor((data.wind.speed*18)/5)} Km/Hr
                                </span>
                            </td>
                        </tr>
                                        <tr>
                            <td>
                                <h4>Dirección del viento</h4>
                            </td>
                            <td>
                                <span>
                                {data.wind.deg} <sup>o</sup>deg
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Hora del amanecer</h4>
                            </td>
                            <td>
                                <span>
                                    {new Date(data.sys.sunrise*1000).toLocaleTimeString()}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Hora del ocaso</h4>
                            </td>
                            <td>
                                <span>
                                    {new Date(data.sys.sunset*1000).toLocaleTimeString()}
                                </span>
                            </td>
                        </tr>
                        </tbody>
                        </table>

                    </div>


                </div>

        </React.Fragment>
    ) : ( <div className = "maincard">
        <h2>Ciudad no encontrada</h2>
        {/* <h2>{data.message}</h2> */}
        </div>

     )}

    </div>
  )
}

export default DisplayWeather