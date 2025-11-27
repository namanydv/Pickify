import React from 'react'
import { footerStyles } from '../assets/dummyStyles'

const Footer = () => {

    const socialLinks = [
    { 
      icon: FaFacebookF, 
      url: 'https://www.facebook.com/' 
    },
    { 
      icon: FaTwitter, 
      url: 'https://twitter.com/' 
    },
    { 
      icon: FaInstagram, 
      url: 'https://www.instagram.com/' 
    },
    { 
      icon: FaYoutube, 
      url: 'https://www.youtube.com/' 
    }
  ];

  return (
    <footer className={footerStyles.footer}>
        <div className={footerStyles.topBorder}/>
    </footer>
  )
}

export default Footer