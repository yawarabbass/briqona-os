import "./IndustryStatus.css";

export default function IndustryStatus({
  status = "Active",
}) {

  const statusClass = status.toLowerCase();

  return (
    <span className={`industry-status ${statusClass}`}>
      {status}
    </span>
  );
}
