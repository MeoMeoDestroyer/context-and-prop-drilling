import { useState } from "react";
import { Route, Routes } from "react-router";

import forecasts from "./data/forecasts.json";
import { UnitsProvider } from "./context/UnitsContext.jsx";
import Layout from "./components/Layout.jsx";
import TodayPage from "./components/TodayPage.jsx";
import WeekPage from "./components/WeekPage.jsx";

function App() {
  const [cityId, setCityId] = useState("seattle");
  const city = forecasts.find((forecast) => forecast.id === cityId);

  return (
    <UnitsProvider>
      <Routes>
        <Route element={<Layout cityId={cityId} onCityChange={setCityId} />}>
          <Route index element={<TodayPage city={city} />} />
          <Route path="week" element={<WeekPage city={city} />} />
        </Route>
      </Routes>
    </UnitsProvider>
  );
}

export default App;