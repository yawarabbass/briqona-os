import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsApp from "./components/WhatsApp/WhatsApp";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  const path = window.location.pathname;

  if (path === "/login") {
    return <Login />;
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
