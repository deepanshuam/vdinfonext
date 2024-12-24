"use client";

import React from "react";
import Top from "../../components/Header/Top";
import Main from "../../components/Header/HeaderComp";
import ServiceBanner from "../../components/banners/ServiceBanner";
import Footer from "../../components/Footer";
import { Box, Typography, Grid, Button } from "@mui/material";
import "./career.scss"; // Import the SCSS file

const page = () => {
  const jobListings = [
    {
      title: "Frontend Developer",
      description:
        "Work on modern web applications using React and Tailwind CSS. Collaborate with cross-functional teams to deliver exceptional UI/UX.",
      location: "Remote",
      type: "Full-Time",
    },
    {
      title: "Backend Developer",
      description:
        "Design and implement robust APIs using Node.js and MongoDB. Build scalable and reliable server-side applications.",
      location: "Remote",
      type: "Full-Time",
    },
    {
      title: "UI/UX Designer",
      description:
        "Create intuitive designs and user experiences for web and mobile applications. Collaborate closely with developers and stakeholders.",
      location: "Hybrid",
      type: "Part-Time",
    },
  ];

  return (
    <>
      <Top />
      <Main />
      <ServiceBanner />
      <div>
        <Box className="hero-banner">
          <Typography variant="h3">Join Our Team</Typography>
          <Typography variant="body1">
            We’re looking for talented, driven individuals to help shape the future.
          </Typography>
        </Box>

        <Box className="job-listings">
          <Grid container spacing={4}>
            {jobListings.map((job, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <div className="job-card">
                  <div className="job-card-content">
                    <Typography variant="h5">{job.title}</Typography>
                    <Typography variant="body2">{job.description}</Typography>
                    <div className="job-meta">
                      <span>Location: {job.location}</span>
                      <span>Type: {job.type}</span>
                    </div>
                  </div>
                  <Button className="apply-btn">Apply Now</Button>
                </div>
              </Grid>
            ))}
          </Grid>

          <Box className="resume-section">
            <Typography variant="body1">
              Don’t see a position for you? We’d still love to hear from you.
            </Typography>
            <Button className="resume-btn">Submit Your Resume</Button>
          </Box>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default page;
