import { Container, Typography } from "@mui/material";
import React from "react";
import Footer from "../footer/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1">
        This is where your privacy policy content goes.
      </Typography>
      <Footer />
    </Container>
  );
};

export default PrivacyPolicy;
