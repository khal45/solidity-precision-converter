import React, { useState } from "react";
import "./styles.css";

const PRECISION = 1e18;

export default function PrecisionConverter() {
  const [rawValue, setRawValue] = useState("");
  const [humanValue, setHumanValue] = useState("");
  const [mode, setMode] = useState("toHuman");

  const handleRawChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setRawValue(val);
    const parsed = parseFloat(val);
    if (!isNaN(parsed)) {
      setHumanValue((parsed / PRECISION).toString());
    } else {
      setHumanValue("");
    }
  };

  const handleHumanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setHumanValue(val);
    const parsed = parseFloat(val);
    if (!isNaN(parsed)) {
      setRawValue((parsed * PRECISION).toString());
    } else {
      setRawValue("");
    }
  };

  return (
    <div className="converter-container">
      <div className="tab-buttons">
        <button
          className={mode === "toHuman" ? "active" : ""}
          onClick={() => setMode("toHuman")}
        >
          To Human
        </button>
        <button
          className={mode === "toRaw" ? "active" : ""}
          onClick={() => setMode("toRaw")}
        >
          To Precision
        </button>
      </div>

      {mode === "toHuman" && (
        <div className="input-group">
          <div>
            <label>Precision Value (e.g. wei)</label>
            <input
              type="text"
              value={rawValue}
              onChange={handleRawChange}
              placeholder="Enter value like 1200000000000000000"
            />
          </div>
          <div>
            <label>Human-readable Value (e.g. ETH)</label>
            <input
              type="text"
              value={humanValue}
              readOnly
              className="readonly"
            />
          </div>
        </div>
      )}

      {mode === "toRaw" && (
        <div className="input-group">
          <div>
            <label>Human-readable Value (e.g. 1.2)</label>
            <input
              type="text"
              value={humanValue}
              onChange={handleHumanChange}
              placeholder="Enter value like 1.2"
            />
          </div>
          <div>
            <label>Precision Value (e.g. wei)</label>
            <input type="text" value={rawValue} readOnly className="readonly" />
          </div>
        </div>
      )}
    </div>
  );
}
