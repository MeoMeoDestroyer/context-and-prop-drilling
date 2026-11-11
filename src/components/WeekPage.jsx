import { useContext } from "react";

import { CityContext } from "../context/CityContext.jsx";
import DayCard from "./DayCard.jsx";

function WeekPage() {
  const { city } = useContext(CityContext);

  return (
    <section className="page">
      <h2 className="page-title">This week in {city.name}</h2>
      <ol className="days">
        {city.daily.map((day) => (
          <DayCard key={day.day} day={day} />
        ))}
      </ol>
    </section>
  );
}

export default WeekPage;