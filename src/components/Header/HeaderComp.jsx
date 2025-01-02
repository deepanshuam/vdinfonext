"use client";
import { Button, Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';
const Main = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const servicesLinks = {
    "digital marketing": [
      { label: "SEO", href: "/services/digital-marketing/seo" },
      {
        label: "Social Media",
        href: "/services/digital-marketing/social-media",
      },
    ],
    "Performance Marketing": [
      {
        label: "Website Design",
        href: "/services/design-and-development/website-design",
      },
      {
        label: "Website Development",
        href: "/services/design-and-development/website-development",
      },
      {
        label: "E-Commerce Development",
        href: "/services/design-and-development/e-commerce-development",
      },
      {
        label: "Application Development",
        href: "/services/design-and-development/application-development",
      },
      {
        label: "Software Development",
        href: "/services/design-and-development/software-development",
      },
    ],
    // Other services...
  };

  const ourWorkLinks = [
    { label: "Website Portfolio", href: "/our-work/website-portfolio" },
    { label: "Application Portfolio", href: "/our-work/application-portfolio" },
    { label: "Software Portfolio", href: "/our-work/software-portfolio" },
    { label: "Graphics Portfolio", href: "/our-work/graphics-portfolio" },
    { label: "SEO Portfolio", href: "/our-work/seo-portfolio" },
    { label: "Performance Portfolio", href: "/our-work/performance-portfolio" },
  ];

  const companyLinks = [
    { label: "About Vd Infotech", href: "/company/about-vd-infotech" },
    { label: "Mission, Vision & Goals", href: "/company/mission-vision-goals" },
    { label: "Why Vd Infotech", href: "/company/why-vd-infotech" },
    { label: "Our Client", href: "/company/our-client" },
    { label: "Testimonials", href: "/company/testimonials" },
    { label: "Social Responsibility", href: "/company/social-responsibility" },
  ];

  const packageLinks = [
    { label: "SEO Packages ", href: "/packages/standard-package" },
    { label: "SMO Packages ", href: "/packages/premium-package" },
    { label: "PPC Packages ", href: "/packages/enterprise-package" },

    { label: "SMM packages ", href: "/packages/enterprise-package" },
    { label: "Graphics Packages  ", href: "/packages/enterprise-package" },
    { label: "Website Packages  ", href: "/packages/enterprise-package" },
    { label: "Application Packages  ", href: "/packages/enterprise-package" },
    { label: "Software Packages  ", href: "/packages/enterprise-package" },
    {
      label: "Email marketing packages ",
      href: "/packages/enterprise-package",
    },
    {
      label: "Digital marketing packages",
      href: "/packages/digitalmarketing-package",
    },
  ];

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
    setSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    setSubmenuVisible(false);
  };

  return (
    <div className={`header_main ${styles.main_header}`}>
      <Container className={styles.main_header__container}>
        <div className={styles.parent_row}>
          <div>
            <Link href={"/"}>
              <Image
                src="/images/logo/logo-light.png"
                width="190"
                className="d-inline-block align-top"
                alt="Company logo"
              />
            </Link>
          </div>
          <div className={styles.main_header__middle_links}>
            <ul className={styles.nav_list}>
              <li>
                <Link className={styles.nav_links} href={"/"}>
                  Home
                </Link>
              </li>
              <li
                className={styles.dropdown}
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <Link className={styles.nav_dropdown} href="#">
                  Services
                </Link>
                <div className={styles.sub_menu}>
                  <Row>
                    <Col md={4}>
                      <ul>
                        <li
                          onMouseEnter={() =>
                            handleMouseEnter("digital marketing")
                          }
                        >
                          <Link
                            className={styles.dropdown_items}
                            href={"/services/digital-marketing"}
                          >
                            Digital Marketing
                          </Link>
                        </li>
                        <li
                          onMouseEnter={() =>
                            handleMouseEnter("Performance Marketing")
                          }
                        >
                          <Link
                            className={styles.dropdown_items}
                            href={"/services/performance-marketing"}
                          >
                            Performance Marketing
                          </Link>
                        </li>
                        <li
                          onMouseEnter={() =>
                            handleMouseEnter("Design & Development")
                          }
                        >
                          <Link
                            className={styles.dropdown_items}
                            href={"/services/design-and-development"}
                          >
                            Design & Development
                          </Link>
                        </li>
                        {/* Add more services */}
                      </ul>
                    </Col>
                    <Col md={8}>
                      {activeMenu in servicesLinks && (
                        <ul className={styles.dropdown_sub_items_list}>
                          {servicesLinks[activeMenu].map((item) => (
                            <li key={item.href}>
                              <Link
                                className={styles.dropdown_sub_items}
                                href={item.href}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Col>
                  </Row>
                </div>
              </li>
              <li
                className={styles.dropdown}
                onMouseEnter={() => handleMouseEnter("Our Work")}
                onMouseLeave={handleMouseLeave}
              >
                <Link className={styles.nav_dropdown} href="#">
                  Our Work
                </Link>
                <div className={styles.sub_menu}>
                  <ul>
                    {ourWorkLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          className={styles.dropdown_items}
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li
                className={styles.dropdown}
                onMouseEnter={() => handleMouseEnter("Packages")}
                onMouseLeave={handleMouseLeave}
              >
                <Link className={styles.nav_dropdown} href="#">
                  Packages
                </Link>
                <div className={styles.sub_menu}>
                  <ul>
                    {packageLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          className={styles.dropdown_items}
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li
                className={styles.dropdown}
                onMouseEnter={() => handleMouseEnter("Company")}
                onMouseLeave={handleMouseLeave}
              >
                <Link className={styles.nav_dropdown} href="#">
                  Company
                </Link>
                {activeMenu === "Company" && submenuVisible && (
                  <div className={styles.sub_menu}>
                    <ul>
                      {companyLinks.map((item) => (
                        <li key={item.href}>
                          <Link
                            className={styles.dropdown_items}
                            href={item.href}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link href="/location">Location</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="/get-free-consultation">
              <Button
                variant="primary"
                className={`ms-lg-3 text-uppercase ${styles.btn_primary} ${styles.main__btn_style}`}
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Main;
