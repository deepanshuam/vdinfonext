import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
  Snackbar,
  Alert,
  Grid
} from "@mui/material";
import { styled } from "@mui/system";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    background: "red", // Set background color to red
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)"
    }
  }));

const StyledTextField = styled(TextField)({
  marginBottom: "1.5rem",
  backgroundColor: "white",
  borderRadius: "4px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black"
    },
    "&:hover fieldset": {
      borderColor: "black"
    },
    "&.Mui-focused fieldset": {
      borderColor: "black"
    }
  }
});

const StyledButton = styled(Button)({
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "#333"
  }
});

const StyledIcon = {
  color: "black"
};

const categories = [
  { value: "support", label: "Support" },
  { value: "sales", label: "Sales" },
  { value: "general", label: "General Inquiry" }
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ severity: "success", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        severity: "error",
        message: "Please fill in all required fields."
      });
    } else {
      setSubmitStatus({
        severity: "success",
        message: "Thank you for your message. We'll get back to you soon!"
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: ""
      });
    }
    setOpenSnackbar(true);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Contact Us
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        We are here to help! Fill out the form below and we will get back to you as soon as possible.
      </Typography>
  
      <Grid container spacing={4}>
        {/* Main Form Section */}
        <Grid item xs={12} md={8}>
          <StyledPaper component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Form Fields */}
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-label="Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-label="Email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="Phone (Optional)"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-label="Phone number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  select
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  aria-label="Category"
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </StyledTextField>
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-label="Subject"
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  aria-label="Message"
                />
              </Grid>
            </Grid>
  
            <StyledButton
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                mt: 3,
                height: 56,
                borderRadius: 2,
                fontSize: "1.1rem",
                textTransform: "none"
              }}
            >
              Send Message
            </StyledButton>
          </StyledPaper>
        </Grid>
  
        {/* Side Form Section */}
        <Grid item xs={12} md={4}>
          <StyledPaper sx={{ height: "100%" }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Get in Touch
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <FaMapMarkerAlt size={24} style={StyledIcon} />
                <Typography sx={{ ml: 2 }}>
                  123 Business Avenue,
                  <br />
                  Suite 100,
                  <br />
                  New York, NY 10001
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <FaPhone size={24} style={StyledIcon} />
                <Typography sx={{ ml: 2 }}>+1 (555) 123&#39;4567</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FaEnvelope size={24} style={StyledIcon} />
                <Typography sx={{ ml: 2 }}>info@company.com</Typography>
              </Box>
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>
  
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={submitStatus.severity}
          sx={{ width: "100%" }}
        >
          {submitStatus.message}
        </Alert>
      </Snackbar>
    </Container>
  );
  
};

export default ContactUs;
