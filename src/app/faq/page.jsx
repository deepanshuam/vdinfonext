"use client"; // Marks the component as a client component

import ServiceBanner from '../../components/banners/ServiceBanner'
import FaqSection from '../../components/Faqs/FaqSection.jsx'
import Footer from '../../components/Footer/'
import Main from '../../components/Header/HeaderComp'
import Top from '../../components/Header/Top'
import { Typography } from '@mui/material'
import React from 'react'
import styles from "./faq.scss"

const faq = () => {
  return (

    <>
    <Top/>
    <Main/>
    <ServiceBanner/>
    <div className={styles.faq_page}>
        <div className={styles.hero_banner}>
            <Typography variant='h1' component="h1">
                Frequently Asked Question
            </Typography>

        </div>
        <div className={styles.faq_container}>
            <FaqSection/>

        </div>

    </div>
    <Footer/>
    </>
  )
}

export default faq
