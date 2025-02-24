import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import TermsConditions from "./components/terms-and-conditions/TermsConditions";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
};

export default App;
