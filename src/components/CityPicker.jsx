import { useContext } from "react";

import { CityContext } from "../context/CityContext.jsx";
import forecasts from "../data/forecasts.json";

function CityPicker() {
  const { city, setCityId } = useContext(CityContext);

  return (
    <label className="city-picker">
      City
      <select value={city.id} onChange={(e) => setCityId(e.target.value)}>
        {forecasts.map((forecast) => (
          <option key={forecast.id} value={forecast.id}>
            {forecast.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default CityPicker;