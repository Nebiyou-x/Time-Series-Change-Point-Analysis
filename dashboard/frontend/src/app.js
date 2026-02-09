import React, { useEffect, useState } from "react";
import { fetchPrices, fetchEvents, fetchChangePoints } from "./api";
import PriceChart from "./components/PriceChart";

function App() {
  const [prices, setPrices] = useState([]);
  const [events, setEvents] = useState([]);
  const [changePoint, setChangePoint] = useState(null);

  useEffect(() => {
    fetchPrices().then(res => setPrices(res.data));
    fetchEvents().then(res => setEvents(res.data));
    fetchChangePoints().then(res => setChangePoint(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Brent Oil Price Dashboard</h2>
      <PriceChart
        prices={prices}
        events={events}
        changePoint={changePoint}
      />
    </div>
  );
}

export default App;
