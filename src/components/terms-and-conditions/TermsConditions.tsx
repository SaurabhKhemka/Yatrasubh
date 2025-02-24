import { Container, Typography } from "@mui/material";
import React from "react";
import Footer from "../footer/Footer";

const TermsConditions: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Terms & Conditions
      </Typography>
      <Typography variant="body1">
        This is where your terms and conditions content goes.
      </Typography>
      <Footer />
    </Container>
  );
};

export default TermsConditions;
