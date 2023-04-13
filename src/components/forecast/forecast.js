import "./forecast.css";

function Forecast({
  temp,
  description,
  high,
  low,
  feels_like,
  humidity,
  icon,
}) {
  return (
    <div className='container'>
      <div className='forecast'>
        <div className='primary-info'>
          <div className='current-temp'>
            Current Temperature:
            <div className='temp'>{temp}</div>
          </div>
          <div className='description'>{description}</div>
        </div>
        {icon ? (
          <img className='weather-icon' src={`icons/${icon}.png`} />
        ) : null}
        <div className='other-info'>
          <div className='high'>
            <div>High:</div>
            <div>{high}</div>
          </div>
          <div className='low'>
            <div>Low:</div>
            <div>{low}</div>
          </div>
          <div className='feels-like'>
            <div>Feels Like:</div>
            <div>{feels_like}</div>{" "}
          </div>

          <div className='humidity'>
            <div>Humidity:</div>
            <div>{humidity}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
