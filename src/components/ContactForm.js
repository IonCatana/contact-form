import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#B0BEC5",
    },
    "&:hover fieldset": {
      borderColor: "#4CAF50",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00796B",
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#00796B",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#005A4F",
  },
  "&:active": {
    backgroundColor: "#004A40",
  },
}));

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });
  const theme = useTheme();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formValues.firstName) newErrors.firstName = "This field is required";
    if (!formValues.lastName) newErrors.lastName = "This field is required";
    if (!formValues.email) {
      newErrors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formValues.queryType)
      newErrors.queryType = "Please select a query type";
    if (!formValues.message) newErrors.message = "This field is required";
    if (!formValues.consent)
      newErrors.consent =
        "To submit this form, please consent to being contacted";

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully:", formValues);
      alert("Form submitted successfully!");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: 5,
        borderRadius: 4,
        maxWidth: 738,
      }}
      onSubmit={handleSubmit}>
      <Typography
        sx={{
          typography: "heading",
        }}
        textAlign="left"
        mb={4}
        color="text.primary">
        Contact Us
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <StyledTextField
          label="First Name"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          fullWidth
          error={Boolean(errors.firstName)}
          helperText={errors.firstName}
        />
        <StyledTextField
          label="Last Name"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          fullWidth
          error={Boolean(errors.lastName)}
          helperText={errors.lastName}
        />
      </Box>

      <StyledTextField
        label="Email Address"
        name="email"
        type="email"
        value={formValues.email}
        onChange={handleChange}
        fullWidth
        error={Boolean(errors.email)}
        helperText={errors.email}
        sx={{ mb: 2 }}
      />

      <FormControl
        component="fieldset"
        sx={{ mb: 2 }}
        error={Boolean(errors.queryType)}>
        <FormLabel>Query Type</FormLabel>
        <RadioGroup
          name="queryType"
          value={formValues.queryType}
          onChange={handleChange}
          row>
          <FormControlLabel
            value="general"
            control={<Radio />}
            label="General Enquiry"
          />
          <FormControlLabel
            value="support"
            control={<Radio />}
            label="Support Request"
          />
        </RadioGroup>
        <FormHelperText>{errors.queryType}</FormHelperText>
      </FormControl>

      <StyledTextField
        label="Message"
        name="message"
        multiline
        rows={4}
        value={formValues.message}
        onChange={handleChange}
        fullWidth
        error={Boolean(errors.message)}
        helperText={errors.message}
        sx={{ mb: 2 }}
      />

      <FormGroup sx={{ mb: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              name="consent"
              checked={formValues.consent}
              onChange={handleChange}
            />
          }
          label="I consent to being contacted by the team"
        />
        {errors.consent && (
          <FormHelperText error>{errors.consent}</FormHelperText>
        )}
      </FormGroup>

      <StyledButton type="submit" variant="contained" fullWidth>
        Submit
      </StyledButton>
    </Box>
  );
};

export default ContactForm;
