import "./Login.css";

function Login() {

  return (

    <main className="auth-page">

      <div className="auth-card">


        <div className="auth-logo">
          BRIQONA <span>OS</span>
        </div>


        <h1>
          Welcome Back
        </h1>


        <p>
          Login to your business operating system.
        </p>



        <form>


          <input
            type="email"
            placeholder="Email address"
          />


          <input
            type="password"
            placeholder="Password"
          />


          <button type="submit">
            Login →
          </button>


        </form>


        <small>
  Need access?
  <a href="#pricing">
    Choose a plan →
  </a>
</small>


      </div>


    </main>

  );

}


export default Login;
