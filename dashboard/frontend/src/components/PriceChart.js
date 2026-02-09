import React from "react";
import {
  LineChart, Line, XAxis, YAxis,
  Tooltip, ReferenceLine, ResponsiveContainer
} from "recharts";

function PriceChart({ prices, events, changePoint }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={prices}>
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="Price"
          stroke="#1f77b4"
          dot={false}
        />

        {events.map((event, idx) => (
          <ReferenceLine
            key={idx}
            x={event.Date}
            stroke="red"
            strokeDasharray="3 3"
            label={event.Event}
          />
        ))}

        {changePoint && (
          <ReferenceLine
            x={changePoint.tau_date}
            stroke="black"
            strokeWidth={2}
            label="Detected Change Point"
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default PriceChart;
