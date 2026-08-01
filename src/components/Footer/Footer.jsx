import "./Footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="container">


        <div className="footer__grid">


          <div className="footer__brand">

            <h3>
              BRIQONA <span>OS</span>
            </h3>

            <p>
              AI-powered Business Operating System helping
              modern companies automate workflows, understand
              data, and grow smarter.
            </p>


          </div>



          <div>

            <h4>
              Product
            </h4>

            <a href="/platform">
              Platform
            </a>

            <a href="/solutions">
              Solutions
            </a>

            <a href="/pricing">
  Pricing
</a>
            <a href="/features">
              Features
            </a>

          </div>



          <div>

            <h4>
              Company
            </h4>
<a href="/about">
  About Us
</a>

            <a href="/careers">
              Careers
            </a>

            <a href="/contact">
              Contact
            </a>

            <a href="/partners">
              Partners
            </a>

          </div>



          <div>

            <h4>
              Resources
            </h4>

            <a href="/blog">
              Blog
            </a>

            <a href="/help">
              Help Center
            </a>

            <a href="/security">
              Security
            </a>

            <a href="/privacy">
              Privacy
            </a>

          </div>


        </div>

<div className="footer__payments">

  <span>
    Secure Payments
  </span>

  <div className="payment-logos">

    <div>VISA</div>

    <div>
      Mastercard
    </div>

    <div>
      JazzCash
    </div>

    <div>
      Easypaisa
    </div>

  </div>

</div>

        <div className="footer__bottom">

          <span>
            © 2026 Briqona OS. All rights reserved.
          </span>


          <div>

            <a href="#">
              LinkedIn
            </a>

            <a href="#">
              X
            </a>

            <a href="#">
              YouTube
            </a>

          </div>


        </div>


      </div>

    </footer>

  );

}


export default Footer;
