import React from "react";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types"; // For prop validation
import styles from "./styles.module.scss";

export default function ServiceBanner({ bannerText, bannerImage }) {
  return (
    <div
      className={styles.service_banner}
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
      }}
    >
      <Container className={styles.service_banner__container}>
        <Row className={styles.text_overlay}>
          <h1>{bannerText}</h1>
        </Row>
      </Container>
    </div>
  );
}

// Default Props
ServiceBanner.defaultProps = {
  bannerText: "Default Banner Text",
  bannerImage: "/path/to/default-image.jpg",
};

// PropTypes Validation
ServiceBanner.propTypes = {
  bannerText: PropTypes.string,
  bannerImage: PropTypes.string,
};
