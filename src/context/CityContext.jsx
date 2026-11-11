import { createContext, useState } from "react";

import forecasts from "../data/forecasts.json";

export const CityContext = createContext(null);

export function CityProvider({ children }) {
  const [cityId, setCityId] = useState("seattle");
  const city = forecasts.find((forecast) => forecast.id === cityId);

  return <CityContext value={{ city, setCityId }}>{children}</CityContext>;
}