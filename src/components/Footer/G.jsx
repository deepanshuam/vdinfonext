import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import styles from "./G.scss";
import Image from 'next/image';
const G = () => {
  return (
    <Box className={styles.footer} component="footer">
      {/* Footer Image */}
      <Box className={styles.footer_image}>
        <Image src="/images/New/footer_32.png" alt="Footer Image" className={styles.footer_Image} />
      </Box>

      <Grid container spacing={4} className={styles.footer_container}>
        {/* Address Section */}
        <Grid item xs={12} sm={6} md={3} className={styles.footer_section}>
          <Typography variant="h6" className={styles.footer_title}>
            Address
          </Typography>
          <Typography className={styles.footer_text}>
            123 Main Street, Suite 100
            <br />
            New York, NY 10001
          </Typography>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={6} md={3} className={styles.footer_section}>
          <Typography variant="h6" className={styles.footer_title}>
            Contact Us
          </Typography>
          <Typography className={styles.footer_text}>
            Phone: +1 (555) 123-4567
            <br />
            Email: <Link href="mailto:info@example.com">info@example.com</Link>
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={3} className={styles.footer_section}>
          <Typography variant="h6" className={styles.footer_title}>
            Quick Links
          </Typography>
          <ul className={styles.footer_links}>
            <li>
              <Link href="/" className={styles.footer_link}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.footer_link}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.footer_link}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.footer_link}>
                Contact
              </Link>
            </li>
          </ul>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={6} md={3} className={styles.footer_section}>
          <Typography variant="h6" className={styles.footer_title}>
            Follow Us
          </Typography>
          <Box className={styles.footer_social}>
            <Link href="#" className={styles.footer_icon} aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="#" className={styles.footer_icon} aria-label="Twitter">
              <FaTwitter />
            </Link>
            <Link href="#" className={styles.footer_icon} aria-label="LinkedIn">
              <FaLinkedinIn />
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box className={styles.footer_bottom}>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default G;
