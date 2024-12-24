"use client";
import React from "react";
import BlogCard from "../../components/Cards/BlogCard/BlogCard.jsx";
import { Grid, Typography, Container } from "@mui/material";
import styles from "./blog.modile.scss";
import Main from "../../components/Header/HeaderComp.jsx";
import Top from "../../components/Header/Top.jsx";
import R from "../../../public/images/R.jpeg";
import Footer from "../../components/Footer";
import HeroBanner from "../../components/home/HeroBanner.jsx";
import ServiceBanner from "../../components/banners/ServiceBanner.jsx";

const blogPosts = [
  {
    id: 1,
    title: "Unlocking The Power Of Raven Tools",
    description:
      "Discover how Raven Tools can transform your digital marketing strategies.",
    url: R,
  },
  {
    id: 2,
    title: "SEO Optimization Tips for 2024",
    description: "Stay ahead of the curve with these cutting-edge SEO tips.",
    url: R,
  },
  {
    id: 3,
    title: "Social Media Growth Strategies",
    description:
      "Grow your audience and boost engagement with these strategies.",
    url: R,
  },
];

const Blogs = () => {
  return (
    <>
      <Top />
      <Main />
      <ServiceBanner className={styles.hero_banner} />
      <Container className={styles.blogs_page}>
        {/* Hero Section */}
        <div className={styles.hero_banner}>
          <Grid container spacing={3} className="mb-6">
            <Grid item xs={12} md={6} className={styles.hero_banner__left}>
              <Typography variant="h2" className="text-white font-bold">
                Our Blogs
              </Typography>
            </Grid>
          </Grid>
        </div>

        {/* Blog Posts Grid */}
        <div className={styles.blogs_list}>
          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <div className={{ border: "2px solid red" }}>
                  <BlogCard post={post} />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Blogs;
