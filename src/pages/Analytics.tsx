import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  const patientsData = [
    { name: "20-30", count: 10 },
    { name: "30-40", count: 20 },
    { name: "40-50", count: 15 },
  ];

  const appointmentsData = [
    { day: "Mon", value: 5 },
    { day: "Tue", value: 8 },
    { day: "Wed", value: 6 },
    { day: "Thu", value: 10 },
    { day: "Fri", value: 7 },
  ];

  return (
    <div>
      <h1>Analytics</h1>

      <div className="analytics-container">
        
        <div className="card chart-card">
          <h3>Patients by Age</h3>

          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <BarChart data={patientsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card chart-card">
          <h3>Appointments Trend</h3>

          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <LineChart data={appointmentsData}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#16a34a" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}