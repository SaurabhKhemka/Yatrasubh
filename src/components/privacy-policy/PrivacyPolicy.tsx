import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";
import "./../../App.css";
import "./policy.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Card variant="outlined" className="card-container">
        Privacy Policy
      </Card>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" gutterBottom>
            Reservation of Rights
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <p>
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amen these terms and conditions and it’s linking policy at any
              time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions.
            </p>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Removal of links from our website
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <p>
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us any moment. We will
              consider requests to remove links but we are not obligated to or
              so or to respond to you directly.
            </p>
            <p>
              We do not ensure that the information on this website is correct,
              we do not warrant its completeness or accuracy; nor do we promise
              to ensure that the website remains available or that the material
              on the website is kept up to date.
            </p>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Disclaimer
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <p>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul>
              <li>
                Limit or exclude our or your liability for death or personal
                injury;
              </li>
              <li>
                Limit or exclude our or your liability for fraud or fraudulent
                misrepresentation;
              </li>
              <li>
                Limit any of our or your liabilities in any way that is not
                permitted under applicable law; or
              </li>
              <li>
                Exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </li>
            </ul>
            <p>
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer:
            </p>
            <p>(a) are subject to the preceding paragraph; and</p>
            <p>
              (b) govern all liabilities arising under the disclaimer, including
              liabilities arising in contract, in tort and for breach of
              statutory duty.
            </p>
            <p>
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage of any nature.
            </p>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
