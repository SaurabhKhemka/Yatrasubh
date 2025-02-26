import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";
import "./../../App.css";
import "./refund.css";

const RefundPolicy: React.FC = () => {
  return (
    <>
      <Card variant="outlined" className="card-container">
        Refund Policy
      </Card>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" gutterBottom>
            Cancellation by the Customer
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <p>
              <ul>
                <li>
                  <strong>More than 30 days before departure:</strong> Full
                  refund minus a processing fee.
                </li>
                <li>
                  <strong>15 to 30 days before departure: </strong> 50% refund
                  of the total booking amount.
                </li>
                <li>
                  <strong>7 to 14 days before departure: </strong> 25% refund of
                  the total booking amount.
                </li>
                <li>
                  <strong>Less than 7 days before departure: </strong> No refund
                  will be issued.
                </li>
              </ul>
            </p>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Cancellation by the Company
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <p>
              In rare cases, we may have to cancel a tour due to unforeseen
              circumstances, including natural disasters, government
              restrictions, or insufficient participation. If we cancel:
            </p>
            <p>
              <ul>
                <li>
                  You will receive a <strong> full refund </strong> or the
                  option to reschedule your trip.
                </li>
                <li>
                  We are not responsible for any additional expenses, such as
                  visa costs or flight tickets.
                </li>
              </ul>
            </p>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Refund Process
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <p>
              <ul>
                <li>
                  Refunds will be processed within
                  <strong> 7-14 business days </strong> from the date of
                  cancellation.
                </li>
                <li>
                  Refunds will be credited to the original payment method used
                  during booking.
                </li>
                <li>
                  Processing fees or bank transaction charges may be deducted
                  from the refund amount.
                </li>
              </ul>
            </p>
          </Typography>
          <Typography variant="h5" gutterBottom>
            No-Show Policy
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <p>
              If a customer fails to show up for the tour/package without prior
              notice, <strong> no refund </strong> will be issued.
            </p>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Changes to Bookings
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <p>
              <ul>
                <li>
                  <strong>Date changes </strong> are allowed up to 10 days
                  before departure, subject to availability.
                </li>
                <li>
                  <strong>Name changes </strong> or transfer of booking to
                  another person may incur an administrative fee.
                </li>
              </ul>
            </p>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Force Majeure Policy
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <p>
              We are not liable for cancellations or disruptions due to
              unforeseen events such as natural disasters, political unrest, or
              pandemics. In such cases, we may offer rescheduling options
              instead of refunds.
            </p>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <p>
              If you need to cancel or modify your booking, please contact us.
              <br />
              📞 Phone: <a href="tel:7001238907">+91 700 123 8907</a>
              <br />
              📧 Email:{" "}
              <a href="mailto:care@yatrasubh.com">care@yatrasubh.com</a>
            </p>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default RefundPolicy;
