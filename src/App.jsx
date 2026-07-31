import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsApp from "./components/WhatsApp/WhatsApp";
import Demo from "./pages/Demo/Demo";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  const path = window.location.pathname;

  if (path === "/login") {
    return <Login />;
  }

if (path === "/demo") {
  return <Demo />;
}

if (path === "/register") {
  return <Register />;
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
