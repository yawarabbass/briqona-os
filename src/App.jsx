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
import Platform from "./pages/Platform/Platform";
import Features from "./pages/Features/Features";
import Solutions from "./pages/Solutions/Solutions";
import Security from "./pages/Security/Security";
import Privacy from "./pages/Privacy/Privacy";
import Blog from "./pages/Blog/Blog";
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import Careers from "./pages/Careers/Careers";
import Partners from "./pages/Partners/Partners";
import Industries from "./pages/Industries/Industries";
import Terms from "./pages/Terms/Terms";
import Documentation from "./pages/Documentation/Documentation";
import Integrations from "./pages/Integrations/Integrations";



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

if (path === "/platform") {
  return (
    <div className="app">
      <Header />
      <Platform />
      <Footer />
    </div>
  );
}


if (path === "/features") {
  return (
    <div className="app">
      <Header />
      <Features />
      <Footer />
    </div>
  );
}


if (path === "/solutions") {
  return (
    <div className="app">
      <Header />
      <Solutions />
      <Footer />
    </div>
  );
}


if (path === "/security") {
  return (
    <div className="app">
      <Header />
      <Security />
      <Footer />
    </div>
  );
}


if (path === "/privacy") {
  return (
    <div className="app">
      <Header />
      <Privacy />
      <Footer />
    </div>
  );
}


if (path === "/blog") {
  return (
    <div className="app">
      <Header />
      <Blog />
      <Footer />
    </div>
  );
}


if (path === "/help") {
  return (
    <div className="app">
      <Header />
      <HelpCenter />
      <Footer />
    </div>
  );
}


if (path === "/careers") {
  return (
    <div className="app">
      <Header />
      <Careers />
      <Footer />
    </div>
  );
}


if (path === "/partners") {
  return (
    <div className="app">
      <Header />
      <Partners />
      <Footer />
    </div>
  );
    }
if (path === "/industries") {
  return (
    <div className="app">
      <Header />
      <Industries />
      <Footer />
    </div>
  );
}


if (path === "/terms") {
  return (
    <div className="app">
      <Header />
      <Terms />
      <Footer />
    </div>
  );
    }

if (path === "/documentation") {
  return (
    <div className="app">
      <Header />
      <Documentation />
      <Footer />
      <WhatsApp />
    </div>
  );
}


if (path === "/integrations") {
  return (
    <div className="app">
      <Header />
      <Integrations />
      <Footer />
      <WhatsApp />
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
