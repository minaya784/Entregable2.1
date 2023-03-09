import axios from "axios";
import React, { useEffect, useState } from "react";
import InfoWeather from "./components/Card/InfoWeather"

const App = () => {
  const [data, setData] = useState(null);
  const [unit, setUnit] = useState("Celsius");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("el usuario acepto compartir su ubicacion");
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let key = "09bc0e08318fe9d74fc173e5b1c03d1e";
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
        )
        .then((response) => setData(response.data))
        .catch((err) => console.log(Error));
    });
  }, []);

 
  return (
    <div className="App">
      <InfoWeather data={data} />
    </div>
  );
};

export default App;
