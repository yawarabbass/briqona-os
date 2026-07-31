import "./Demo.css";

function Demo() {

  return (

    <main className="demo-page">


      <div className="demo-card">


        <span>
          BOOK A DEMO
        </span>


        <h1>
          See How Briqona OS
          <strong> Transforms Your Business</strong>
        </h1>


        <p>
          Schedule a personalized demo and discover how
          AI-powered automation can help your business
          operate smarter and grow faster.
        </p>



        <form>


          <input
            type="text"
            placeholder="Company Name"
          />


          <input
            type="email"
            placeholder="Work Email"
          />


          <input
            type="tel"
            placeholder="Phone Number"
          />


          <select>

            <option>
              Select Industry
            </option>

            <option>
              Healthcare
            </option>

            <option>
              Retail
            </option>

            <option>
              Finance
            </option>

            <option>
              Manufacturing
            </option>

          </select>



          <textarea
            placeholder="Tell us about your business"
            rows="4"
          />


          <button type="submit">
            Request Demo →
          </button>


        </form>


      </div>


    </main>

  );

}


export default Demo;
