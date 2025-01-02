"use client";

import React from "react";
import Top from "../../components/Header/Top";
import Main from "../../components/Header/HeaderComp";
import ServiceBanner from "../../components/banners/ServiceBanner";
import Footer from "../../components/Footer";
import { Box, Typography, Grid, Button } from "@mui/material";
import "./industry.scss"; // Import the SCSS file

const page = () => {
  const industryData = [
    "Drugs & Pharmaceuticals",
    "Apparel & Garments",
    "Hospital & Diagnostics",
    "Food & Beverages",
    "Industrial Plants & Machinery",
    "Industrial Supplies",
    "Building & Construction",
    "Electronics & Electrical",
    "Packaging Machines & Goods",
    "Chemicals, Dyes & Solvents",
    "Mechanical Parts & Spares",
    "Lab Instruments & Supplies",
    "Furniture & Supplies",
    "Automobile, Parts & Spares",
    "Agriculture & Farming",
    "Housewares & Supplies",
    "Metals, Alloys & Minerals",
    "Hand & Machine Tools",
    "Handicrafts & Decoratives",
    "Kitchen Utensils & Appliances",
    "Textiles, Yarn & Fabrics",
    "Books & Stationery",
    "Cosmetics & Personal Care",
    "Home Textile & Furnishing",
    "Engineering Services",
    "Gems, Jewelry & Astrology",
    "Computer & IT Solutions",
    "Fashion Accessories & Gear",
    "Herbal & Ayurvedic Products",
    "Security Systems & Services",
    "Sports Goods, Toys & Games",
    "Telecom Equipment & Goods",
    "Paper & Paper Products",
    "Bags, Belts & Wallets",
    "Media, PR & Publishing",
    "Marble, Granite & Stones",
    "Event Planner & Organizer",
    "IT & Telecom Services",
    "Product Rental & Leasing",
    "Transportation & Logistics",
    "Business & Audit Services",
    "Financial & Legal Services",
    "Education & Training",
    "Travel, Tourism & Hotels",
    "Call Center & BPO Services",
    "Bicycle, Rickshaw & Spares",
    "R&D and Testing Labs",
    "Architecture & Interiors",
    "HR Planning & Recruitment",
    "Housekeeping Services",
    "Leather Products",
    "Contractors & Freelancers",
    "Electronics Components",
    "Electrical Equipment",
    "Hospital, Clinic & Consultation",
  ];

  return (
    <>
      <Top />
      <Main />
    
      <ServiceBanner
      bannerText="Industries "
      bannerImage="/path/to/your-image.jpg"
    />
      <div>
        <Box className="industry-section">
          <Typography variant="h3" align="center" gutterBottom>
            Explore Our Industries
          </Typography>
          <Grid container spacing={4}>
            {industryData.map((industry, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <div className="industry-card">
                  <Typography variant="h6">{industry}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default page;
