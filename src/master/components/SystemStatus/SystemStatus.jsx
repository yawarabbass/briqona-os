import "./SystemStatus.css";

const systems = [
  {
    name: "API Server",
    status: "Online",
  },
  {
    name: "Database",
    status: "Healthy",
  },
  {
    name: "Storage",
    status: "Normal",
  },
  {
    name: "AI Engine",
    status: "Running",
  },
];

export default function SystemStatus() {
  return (
    <section className="system-status">

      <h3>System Status</h3>

      <div className="system-status-list">

        {systems.map((item) => (

          <div
            key={item.name}
            className="system-status-item"
          >

            <span>{item.name}</span>

            <span className="status-badge">
              {item.status}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}
