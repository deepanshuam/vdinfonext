"use client";
import { Button, Container, Row, Col } from 'react-bootstrap';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useState } from 'react';

const Main = () => {

  const [activeMenu, setActiveMenu] = useState('');
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const servicesLinks = {
    'digital marketing': [
      { label: 'SEO', href: '/services/digital-marketing/seo' },
      { label: 'Social Media', href: '/services/digital-marketing/social-media' },
    ],
    'Performance Marketing': [
      { label: 'Website Design', href: '/services/design-and-development/website-design' },
      { label: 'Website Development', href: '/services/design-and-development/website-development' },
      { label: 'E-Commerce Development', href: '/services/design-and-development/e-commerce-development' },
      { label: 'Application Development', href: '/services/design-and-development/application-development' },
      { label: 'Software Development', href: '/services/design-and-development/software-development' },
    ],
    'Design & Development': [
      { label: 'Website Design', href: '/services/design-and-development/website-design' },
      { label: 'Website Development', href: '/services/design-and-development/website-development' },
      { label: 'E-Commerce Development', href: '/services/design-and-development/e-commerce-development' },
      { label: 'Application Development', href: '/services/design-and-development/application-development' },
      { label: 'Software Development', href: '/services/design-and-development/software-development' },
    ],
    'Graphic Designing': [
      { label: 'Website Design', href: '/services/design-and-development/website-design' },
      { label: 'Website Development', href: '/services/design-and-development/website-development' },
      { label: 'E-Commerce Development', href: '/services/design-and-development/e-commerce-development' },
      { label: 'Application Development', href: '/services/design-and-development/application-development' },
      { label: 'Software Development', href: '/services/design-and-development/software-development' },
    ],
    'Video Production': [
      { label: 'Website Design', href: '/services/design-and-development/website-design' },
      { label: 'Website Development', href: '/services/design-and-development/website-development' },
      { label: 'E-Commerce Development', href: '/services/design-and-development/e-commerce-development' },
      { label: 'Application Development', href: '/services/design-and-development/application-development' },
      { label: 'Software Development', href: '/services/design-and-development/software-development' },
    ],
    'Brand Promotions': [
      { label: 'Website Design', href: '/services/design-and-development/website-design' },
      { label: 'Website Development', href: '/services/design-and-development/website-development' },
      { label: 'E-Commerce Development', href: '/services/design-and-development/e-commerce-development' },
      { label: 'Application Development', href: '/services/design-and-development/application-development' },
      { label: 'Software Development', href: '/services/design-and-development/software-development' },
    ],
    
  };

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
    setSubmenuVisible(true); // Show submenu when hovering over parent
  };

  const handleMouseLeave = () => {
    setSubmenuVisible(false); // Hide submenu when mouse leaves both parent and submenu
  };
  const renderDropdown = (menuType) => (
    <div className={styles.sub_menu}>
      <Row>
        <Col md={4}>
          <ul>
            {Object.keys(links[menuType]).map((category) => (
              <li
                key={category}
                onMouseEnter={() => handleMouseEnter(menuType, category)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className={styles.dropdown_items}
                  href={`/${menuType}/${category.replace(" ", "-").toLowerCase()}`}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col md={8}>
          {submenuVisible &&
            activeMenu &&
            activeMenu.type === menuType &&
            activeMenu.category in links[menuType] && (
              <ul
                className={styles.dropdown_sub_items_list}
                onMouseEnter={() => setSubmenuVisible(true)}
                onMouseLeave={handleMouseLeave}
              >
                {links[menuType][activeMenu.category].map((item) => (
                  <li key={item.href}>
                    <Link className={styles.dropdown_sub_items} href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
        </Col>
      </Row>
    </div>
  );
  return (
    <div className={`header_main ${styles.main_header}`}>
      <Container className={styles.main_header__container}>
        <div className={styles.parent_row}>
          <div>
            <Link href={"/"}>
              <img
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
                <Link className={styles.nav_links} href={"/"}>Home</Link>
              </li>
              <li
                className={styles.dropdown}
                onMouseEnter={() => setActiveMenu('services')}
                onMouseLeave={() => setActiveMenu('')}
              >
                <Link className={styles.nav_dropdown} href={"/"}>Services</Link>
                <div className={styles.sub_menu}>
                  <Row>
                    <Col md={4}>
                      <ul>
                        <li
                          onMouseEnter={() => handleMouseEnter('digital marketing')}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link className={styles.dropdown_items} href={"/services/digital-marketing"}>
                            Digital Marketing
                          </Link>
                        </li>
                        <li
                          onMouseEnter={() => handleMouseEnter('Performance Marketing')}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link className={styles.dropdown_items} href={"/services/performance-marketing"}>
                            Performance Marketing
                          </Link>
                        </li>
                        <li
                          onMouseEnter={() => handleMouseEnter('Design & Development')}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link className={styles.dropdown_items} href={"/services/design-and-development"}>
                            Design & Development
                          </Link>
                        </li>
                        <li
                          onMouseEnter={() => handleMouseEnter('Graphic Designing')}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link className={styles.dropdown_items} href={"/services/graphic-designing"}>
                            Graphic Designing
                          </Link>
                        </li>
                        <li
                          onMouseEnter={() => handleMouseEnter('Video Production')}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link className={styles.dropdown_items} href={"/services/video-production"}>
                            Video Production
                          </Link>
                        </li>
                        <li
                          onMouseEnter={() => handleMouseEnter('Brand Promotions')}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link className={styles.dropdown_items} href={"/services/brand-promotions"}>
                            Brand Promotions
                          </Link>
                        </li>
                      </ul>
                    </Col>
                    <Col md={8}>
                      {(activeMenu in servicesLinks) && (
                        <ul
                          className={styles.dropdown_sub_items_list}
                          onMouseEnter={() => setSubmenuVisible(true)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {servicesLinks[activeMenu].map((item) => (
                            <li key={item.href}>
                              <Link className={styles.dropdown_sub_items} href={item.href}>
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
              <li className={styles.dropdown}>
                <Link className={styles.nav_dropdown} href={"#"}>Our Work</Link>
              </li>
              <li className={styles.dropdown}>
                <Link href={"#"}>Packages</Link>
              </li>
              <li>
                <Link href={"#"}>Company</Link>
              </li>
              <li>
                <Link href={"#"}>Location</Link>
              </li>
              <li>
                <Link href={"#"}>Industries</Link>
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
