import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const ContactForm = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "0 auto",
        mt: 5,
      }}>
      <Typography variant="h4" component="h1" textAlign="center">
        Contact Us
      </Typography>
      <TextField label="Your Name" variant="outlined" required />
      <TextField
        label="Email Address"
        type="email"
        variant="outlined"
        required
      />
      <TextField
        label="Message"
        multiline
        rows={4}
        variant="outlined"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
