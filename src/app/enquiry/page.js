"use client";
import { Grid, Typography, Container } from "@mui/material";
import ContactForm from "../../components/forms/contactForm/ContactForm.jsx";
import Main from "../../components/Header/HeaderComp.jsx";
import Top from "../../components/Header/Top.jsx";
import Footer from "../../components/Footer/index.jsx";
import styles from "./enquiry.scss";
import ServiceBanner from "../../components/banners/ServiceBanner.jsx";

const Enquiry = () => {
  return (
    <>
      <Top />
      <Main />
      <ServiceBanner />
      {/* Full-width container without any margin or padding */}
      <div className={styles.enquiry_page}>
        {/* Hero Banner */}
        <div className={styles.hero_banner}>
          <Typography variant="h1" component="h1">
            Get In Touch With Us
          </Typography>
        </div>

        {/* Contact Form */}
        <div className={styles.form_container}>
          <ContactForm />
        </div>

        {/* Footer */}
      </div>
      <Footer />
    </>
  );
};

export default Enquiry;
