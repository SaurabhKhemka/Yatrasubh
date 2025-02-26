import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./components/contact-us/ContactUs";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import RefundPolicy from "./components/refund-policy/RefundPolicy";
import TermsConditions from "./components/terms-and-conditions/TermsConditions";
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
