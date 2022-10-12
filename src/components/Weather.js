import React, {useState} from 'react'
import DisplayWeather from './DisplayWeather';
import './weather.css'
import Spinner from './Spinner';

 function Weather() {
const [weather, setWeather] = useState([]);
const [form, setForm] = useState({
    city:"",
    country:""

});
 const [mostrarSpinner, setMostrarSpinner] = useState(false)

const APIKEY = "79b26ce8648741ed82a5a6d5cbd5af63";

async function weatherData(e){
    e.preventDefault();
    if(form.city === ""){
        alert("Add values");
    }else{
    setMostrarSpinner(true);
    const data = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&lang=es&appid=${APIKEY}`)
    .then((res) => res.json())
    .then (data =>data);
    setMostrarSpinner(false);
    setWeather({data : data});
     }
    }

const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city"){
        setForm ({...form, city:value});

    }
        if (name === "country"){
        setForm ({...form, country:value})

    }
};

const mostrarComponente = (mostrarSpinner === true) ? (<Spinner></Spinner>):(<DisplayWeather data={weather.data} />)

  return (
    <div className="weather container">
        <span className="title">App del clima</span>
        <br/>
        <form>
            <div>
            <input type="text" name="city" placeholder="Ciudad" onChange={e => handleChange(e)}></input>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="country" placeholder="País" onChange={e => handleChange(e)}></input>
            </div>
            <button className="getweather" onClick={(e) => weatherData(e)}>Buscar</button>
        </form>

    {weather.data != null ? (
        <div>
            {mostrarComponente}
        </div>
       ) : null}
    </div>
    
  )
}


export default Weather
