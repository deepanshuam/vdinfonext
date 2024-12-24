"use client"
import ServiceBanner from "../../components/banners/ServiceBanner";
import Footer from "../../components/Footer";
import Main from "../../components/Header/HeaderComp";
import CalculatorForm from "../../components/websitecalculator/websiteCalculator";
import React from "react";
import styles from "./website.scss";
import Top from "../../components/Header/Top";
import { Typography } from "@mui/material";
const page = () => {
  return (
    <>
      <Top/>
      <Main />
      <ServiceBanner />
      <div className={styles.website_page}>
        <div className={styles.hero_banner}>
          <Typography variant="h1" component="h1">
            Website Calculator
          </Typography>
        </div>
      </div>
      <CalculatorForm />
      <Footer />
    </>
  );
};

export default page;
