// DailySummary.js
import React from "react";

function DailySummary({ med1, med2 }) {
  const total = [med1, med2].filter(Boolean).length;
  const taken = [med1, med2].filter((m) => m && m.taken).length;

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Daily Summary</h2>
      <p>
        You have taken {taken}/{total} medicines today
      </p>
    </div>
  );
}

export default DailySummary;
