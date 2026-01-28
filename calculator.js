"use client"
import { useState } from "react";

export default function MonitorDistanceCalculator() {
  const [D, setD] = useState(32);

  const b = (D) =>
    Math.round(
      (37 / ((32 / Math.sqrt((9 / 16) ** 2 + 1)) * 2.54)) *
        ((D / Math.sqrt((9 / 16) ** 2 + 1)) * 2.54)
    );

  const f = (D) => Math.round(-1.05 * D + 147.2);

  const cmToIn = (cm) => Math.round(cm / 2.54);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", fontFamily: "sans-serif" }}>
      <label style={{ display: "block", marginBottom: "25px" }}>
        <strong>Monitor Size: {D}"</strong>
        <input
          type="range"
          min="20"
          max="43"
          value={D}
          onChange={(e) => setD(Number(e.target.value))}
          style={{ width: "100%", marginTop: "10px" }}
        />
      </label>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px", width: "100%" }}>
        <div>
          Distance from top of BT buttons to monitor:{" "}
          <span style={{ fontWeight: "bold" }}>
            {b(D)} cm / {cmToIn(b(D))}"
          </span>
        </div>

        <div>
          Distance from the floor to the bottom edge of monitor:{" "}
          <span style={{ fontWeight: "bold" }}>
            {f(D)} cm / {cmToIn(f(D))}"
          </span>
        </div>
      </div>
    </div>
  );
}
