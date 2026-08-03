export default function ComingSoon({
  title = "Coming Soon",
  description = "This module is under development."
}) {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "40px"
      }}
    >
      <h1>{title}</h1>

      <p>{description}</p>
    </div>
  );
}
