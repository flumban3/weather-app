import React, { useState } from "react";
import "./App.css";
import Forecast from "./components/forecast/forecast";
import Search from "./components/search/search";

function App() {
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState({});

  const todayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=97b9e83229beb43911ee7d7bd37c5441&units=imperial`;

  const city = (event) => {
    if (event.key === "Enter") {
      fetch(todayURL)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setForecast(result);
        });
    }
  };

  return (
    <div className='App'>
      <div className='header'>Weather App</div>
      <Search
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        city={city}
      />
      <div className='city'>
        {forecast.city ? <p>{forecast.city.name}</p> : null}
      </div>
      <Forecast
        value={forecast}
        icon={forecast.list ? forecast.list[0].weather[0].icon : null}
        temp={forecast.list ? forecast.list[0].main.temp : null}
        description={forecast.list ? forecast.list[0].weather[0].main : null}
        high={forecast.list ? forecast.list[0].main.temp_max : null}
        low={forecast.list ? forecast.list[0].main.temp_min : null}
        feels_like={forecast.list ? forecast.list[0].main.feels_like : null}
        humidity={forecast.list ? forecast.list[0].main.humidity : null}
      />
    </div>
  );
}

export default App;
