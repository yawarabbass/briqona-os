import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsApp from "./components/WhatsApp/WhatsApp";
import Demo from "./pages/Demo/Demo";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Pricing from "./pages/Pricing/Pricing";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  const path = window.location.pathname;

  if (path === "/login") {
  return (
    <div className="app">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

if (path === "/demo") {
  return (
    <div className="app">
      <Header />
      <Demo />
      <Footer />
    </div>
  );
}

if (path === "/register") {
  return (
    <div className="app">
      <Header />
      <Register />
      <Footer />
    </div>
  );
}
if (path === "/pricing") {
  return (
    <div className="app">
      <Header />
      <Pricing />
      <Footer />
    </div>
  );
}
if (path === "/about") {
  return (
    <div className="app">
      <Header />
      <About />
      <Footer />
    </div>
  );
}
if (path === "/contact") {
  return (
    <div className="app">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
        }



  
  return (
    <div className="app">
      <Header />

      <Home />

      <Footer />

      <WhatsApp />
    </div>
  );
}

export default App;
