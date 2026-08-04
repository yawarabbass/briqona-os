import "./ModuleStatus.css";

export default function ModuleStatus({
  status = "Active",
}) {

  const statusClass = status.toLowerCase();

  return (
    <span className={`module-status ${statusClass}`}>
      {status}
    </span>
  );
}
