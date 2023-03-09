import React, { useState } from "react";
import "../Card/InfoWeather.css";
import image1 from "../../assets/nube.png"


const InfoWeather = ({ data }) => {
  console.log(data);
  
  const [tempp, setTempp] = useState(true)
  
  return (
    <> 
    <section className="container__father">
       <h1 className="title">Weather App</h1>
      <div className="container__initial">
        
        <div className="container__img">
          <h2 className="container__temp">
            {
              tempp? <h1> {Math.floor(data?.main.temp - 273)}°C </h1>: 
              <h1> {Math.floor(((data?.main.temp - 273) * 1.8) + 32)}°F </h1>
            }
          </h2>
           <img className="container__img-1" src={image1} alt="" />
        </div>
        <div className="container__winds">
          <h3>Winds: {data?.wind.speed} km/h </h3>
          <h3>Clouds: {data?.clouds.all} %</h3>
          <h3>Pressure {data?.main.pressure} hPa</h3>
        </div>
        <div className="container__country">
          <h1>
            {data?.name}, {data?.sys.country}
          </h1>
          <h2 className="container__descr" >{data?.weather[0].description}</h2>
        </div>
      </div>
      <button onClick={() => setTempp (!tempp)}>Change Temp</button>
      </section>
    </>
  );
};

export default InfoWeather;
