// NextMedicine.js
import React, { useEffect, useState } from "react";

function NextMedicine({ med1, med2 }) {
  const [nextMed, setNextMed] = useState(null);

  useEffect(() => {
    const meds = [med1, med2].filter(Boolean).filter((m) => !m.taken);

    if (meds.length > 0) {
      const sorted = meds.sort((a, b) => (a.time > b.time ? 1 : -1));
      setNextMed(sorted[0]);
    } else {
      setNextMed(null);
    }
  }, [med1, med2]);

  if (!nextMed) return null;

  return (
    <div style={{ color: "green", fontWeight: "bold", marginBottom: "20px" }}>
      Next medicine: {nextMed.name} at {nextMed.time}
    </div>
  );
}

export default NextMedicine;
