import "./Card.css";

export default function Card({
  title,
  subtitle,
  children,
  footer,
}) {
  return (
    <section className="card">

      {(title || subtitle) && (
        <div className="card-header">

          {title && (
            <h3 className="card-title">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="card-subtitle">
              {subtitle}
            </p>
          )}

        </div>
      )}

      <div className="card-body">
        {children}
      </div>

      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}

    </section>
  );
}
