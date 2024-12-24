"use client";
import ServiceBanner from "../../components/banners/ServiceBanner";
import Footer from "../../components/Footer";
import Main from "../../components/Header/HeaderComp";

import React from "react";
import styles from "./free.scss";
import Top from "../../components/Header/Top";
import { Typography } from "@mui/material";
import ContactUs from "../../components/forms/GetForm";
const page = () => {
  return (
    <>
      <Top />
      <Main />
      <ServiceBanner />
      <div className={styles.website_page}>
        <div className={styles.hero_banner}>
          <Typography variant="h1" component="h1">
        
          </Typography>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default page;
