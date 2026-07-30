import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Platform from "./pages/Platform";
import Pricing from "./pages/Pricing";

function App() {
  const path = window.location.pathname;

  const routes = {
    "/": <Home />,
    "/index.html": <Home />,
    "/platform": <Platform />,
    "/pricing": <Pricing />,
  };

  const page = routes[path] || <Home />;

  return (
    <>
      <Header />

      <main id="main-content">
        {page}
      </main>

      <Footer />
    </>
  );
}

export default App;
