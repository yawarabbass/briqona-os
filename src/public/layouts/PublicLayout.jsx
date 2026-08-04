/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Public Layout
|--------------------------------------------------------------------------
*/

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WhatsApp from "../../components/WhatsApp/WhatsApp";

export default function PublicLayout({ children }) {
  return (
    <div className="public-layout">

      <Header />

      <main className="public-content">
        {children}
      </main>

      <Footer />

      <WhatsApp />

    </div>
  );
}
