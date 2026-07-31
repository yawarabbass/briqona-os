import "./Footer.css";

const footerColumns = [
  {
    title: "Platform",
    links: [
      ["Overview", "#platform"],
      ["Features", "#features"],
      ["Integrations", "#integrations"],
      ["Security", "#security"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["CRM", "#solutions"],
      ["Projects", "#solutions"],
      ["Finance", "#solutions"],
      ["AI & Automation", "#solutions"],
    ],
  },
  {
    title: "Industries",
    links: [
      ["Healthcare", "#industries"],
      ["Construction", "#industries"],
      ["Real Estate", "#industries"],
      ["Agencies", "#industries"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "#about"],
      ["Careers", "#careers"],
      ["Contact", "#contact"],
      ["Partners", "#partners"],
    ],
  },
];

function Footer() {
  return (
    <footer className="site-footer" id="about">
      <div className="container site-footer__grid">

        <div className="site-footer__brand">
          <a
            className="site-footer__logo"
            href="/"
            aria-label="Briqona OS Home"
          >
            <span className="site-footer__mark">
              <i />
              <i />
              <i />
              <i />
            </span>

            <span className="site-footer__brand-text">
              <strong>
                BRIQONA <em>OS</em>
              </strong>

              <small>Business Operating System</small>
            </span>
          </a>

          <p>
            The intelligent operating system
            for modern businesses.
          </p>

          <div className="site-footer__socials">
            <a href="#linkedin" aria-label="LinkedIn">
              in
            </a>

            <a href="#x" aria-label="X">
              𝕏
            </a>

            <a href="#facebook" aria-label="Facebook">
              f
            </a>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div
            className="site-footer__column"
            key={column.title}
          >
            <h3>{column.title}</h3>

            {column.links.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </div>
        ))}

        <div className="site-footer__newsletter">
          <h3>Stay in the loop</h3>

          <p>
            Product updates and business insights.
          </p>

          <form>
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
            />

            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="container site-footer__bottom">
        <span>
          © 2026 Briqona OS. All rights reserved.
        </span>

        <span>
          Built for businesses worldwide.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
