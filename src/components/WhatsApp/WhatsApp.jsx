import "./WhatsApp.css";

function WhatsApp() {
  return (
    <div className="contact-float">

      <a
        className="whatsapp-float"
        href="https://wa.me/923348101110"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Briqona OS on WhatsApp"
      >
        <span className="whatsapp-float__icon">
          ☎
        </span>

        <span className="whatsapp-float__text">
          WhatsApp Us
        </span>
      </a>

      <a
        className="call-float"
        href="tel:+923355551218"
        aria-label="Call Briqona OS"
      >
        <span>☎</span>
        <strong>0335 5551218</strong>
      </a>

    </div>
  );
}

export default WhatsApp;
