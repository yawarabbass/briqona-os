import { Routes, Route } from "react-router-dom";

import PublicLayout from "../../public/layouts/PublicLayout";

import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Pricing from "../../pages/Pricing/Pricing";
import Contact from "../../pages/Contact/Contact";
import Platform from "../../pages/Platform/Platform";
import Features from "../../pages/Features/Features";
import Solutions from "../../pages/Solutions/Solutions";
import Security from "../../pages/Security/Security";
import Privacy from "../../pages/Privacy/Privacy";
import Blog from "../../pages/Blog/Blog";
import HelpCenter from "../../pages/HelpCenter/HelpCenter";
import Careers from "../../pages/Careers/Careers";
import Partners from "../../pages/Partners/Partners";
import Industries from "../../pages/Industries/Industries";
import Terms from "../../pages/Terms/Terms";
import Documentation from "../../pages/Documentation/Documentation";
import Integrations from "../../pages/Integrations/Integrations";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Demo from "../../pages/Demo/Demo";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />

      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/features" element={<Features />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/security" element={<Security />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
            }
