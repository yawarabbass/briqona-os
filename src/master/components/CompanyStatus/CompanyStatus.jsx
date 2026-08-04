import "./CompanyStatus.css";

export default function CompanyStatus({
  status = "Active",
}) {

  const statusClass = status.toLowerCase();

  return (
    <span className={`company-status ${statusClass}`}>
      {status}
    </span>
  );
}
