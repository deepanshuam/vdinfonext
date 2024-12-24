"use client"; // Marks the component as a client component

import ServiceBanner from '../../components/banners/ServiceBanner'

import Footer from '../../components/Footer/'
import Main from '../../components/Header/HeaderComp'
import Top from '../../components/Header/Top'
import { Typography } from '@mui/material'
import React from 'react'
import styles from "./contact.scss"
import ContactForm from '../../components/forms/contactForm/ContactForm'

const contact = () => {
  return (

    <>
    <Top/>
    <Main/>
    <ServiceBanner/>
    <div className={styles.conatct_page}>
        <div className={styles.hero_banner}>
            <Typography variant='h1' component="h1">
                Contact Us
            </Typography>

        </div>
        <div className={styles.contact_container}>
            <ContactForm/>

        </div>

    </div>
    <Footer/>
    </>
  )
}

export default contact
