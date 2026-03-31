import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "../store/patientSlice";

export default function Patients() {
  const dispatch = useDispatch();
  const { list, view } = useSelector((state: any) => state.patients);

  return (
    <div>
      <h1>Patients</h1>

      <button
        className="button"
        onClick={() => dispatch(toggleView())}
        style={{ marginTop: 10 }}
      >
        Switch to {view === "grid" ? "List" : "Grid"} View
      </button>

      <div style={{ marginTop: 30 }}>
        {view === "grid" ? (
          <div style={{ display: "flex", gap: 20 }}>
            {list.map((p: any) => (
              <div key={p.id} className="card">
                <h3>{p.name}</h3>
                <p style={{ color: "#64748b" }}>Age: {p.age}</p>
              </div>
            ))}
          </div>
        ) : (
          <table className="table" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {list.map((p: any) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}