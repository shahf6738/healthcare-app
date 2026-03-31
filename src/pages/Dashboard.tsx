import React from "react";

export default function Dashboard() {
  return (
     <div>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <div className="card">
          <h3>Total Patients</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Appointments</h3>
          <p>45</p>
        </div>

        <div className="card">
          <h3>Alerts</h3>
          <p>5</p>
        </div>
      </div>
    </div>
  );
}