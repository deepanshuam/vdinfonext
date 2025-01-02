"use client";

import React from "react";
import Top from "../../components/Header/Top";
import Main from "../../components/Header/HeaderComp";
import ServiceBanner from "../../components/banners/ServiceBanner";
import Footer from "../../components/Footer";
import { Box, Typography, Grid } from "@mui/material";
import "./location.scss"; // Import the updated SCSS file

const page = () => {
  const locationData = [
    {
      state: "Andhra Pradesh",
      cities: ["Amaravati", "Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
    },
    {
      state: "Arunachal Pradesh",
      cities: ["Itanagar", "Naharlagun", "Pasighat"],
    },
    {
      state: "Assam",
      cities: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat"],
    },
    {
      state: "Bihar",
      cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
    },
    {
      state: "Chhattisgarh",
      cities: ["Raipur", "Bilaspur", "Durg", "Korba"],
    },
    // Add more states and cities similarly...
  ];

  return (
    <>
      <Top />
      <Main />
      <ServiceBanner />
      <Box className="location-section">
        <Typography variant="h3" align="center" gutterBottom>
          Locations & Cities
        </Typography>
        <Typography variant="h3" align="center" gutterBottom>
        India
        </Typography>
        <Grid container spacing={4}>
          {locationData.map((location, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="location-card">
                <Typography variant="h6" className="state-name">
                  {location.state}
                </Typography>
                <ul className="city-list">
                  {location.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="city-name">
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default page;
