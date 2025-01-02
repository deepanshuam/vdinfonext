import React from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from "./styles.module.scss"
import Slider from 'react-slick/lib/slider'
import Image from 'next/image';

export default function OurPartners() {
    var settings = {
        autoplay:true,
        autoplaySpeed: 4000,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
    };
  return (
    <section className={styles.our_partners}>
        <Container className={styles.our_partners__content}>
            <Row className={styles.heading}>
                <h3 className='text-center text-uppercase mt-3'>
                    our <span>partners</span>
                </h3>
            </Row>
            <Row className={styles.our_partners__cards}>
                <Slider {...settings} className={` ${styles.tools_Image}`}>
                    <div className={styles.slide_item}>
                        <li className='d-flex justify-content-center align-items-center'>
                            <Image src="/images/New/yt.png" alt="YouTube Certified" className={styles.certificationLogo} />    
                        </li>
                    </div>
                    <div className={styles.slide_item}>
                        <li className='d-flex justify-content-center align-items-center'>
                            <Image src="/images/New/semrush.png" alt="Bing Certified" className={styles.certificationLogo} />
                        </li>
                    </div>
                    <div className={styles.slide_item}>
                        <li className='d-flex justify-content-center align-items-center'>
                            <Image src="/images/New/bing.png" alt="Google AdWords Certified" className={styles.certificationLogo} />
                        </li>
                    </div>
                    <div className={styles.slide_item}>
                        <li className='d-flex justify-content-center align-items-center'>
                            <Image src="/images/New/ga.png" alt="Google Analytics Certified" className={styles.certificationLogo} />
                        </li>
                    </div>
                    <div className={styles.slide_item}>
                        <li className='d-flex justify-content-center align-items-center'>
                            <Image src="/images/New/ps.png" alt="Google Analytics Certified" className={styles.certificationLogo} />
                        </li>
                    </div>
                </Slider>
            </Row>
        </Container>
    </section>
  )
}