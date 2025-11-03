import React, { useState } from 'react'
import {navbarStyles} from '../assets/dummyStyles'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


const Navbar = () => {
    const[scrolled,setScrolled] = useState(false)

  return (
    <nav className={`${navbarStyles.nav} ${scrolled ? navbarStyles.scrolled : navbarStyles.unscrolledNav}`}>
        <div className={navbarStyles.borderGradient}/>
        <div className={navbarStyles.particlesContainer }>
            <>
      <div
        className={`${navbarStyles.particle} w-24 h-24 bg-emerald-500/5 -top-12 left-1/4 ${navbarStyles.floatAnimation}`}
      />
      <div
        className={`${navbarStyles.particle} w-32 h-32 bg-green-500/5 -bottom-16 left-2/3 ${navbarStyles.floatSlowAnimation}`}
      />
      <div
        className={`${navbarStyles.particle} w-16 h-16 bg-teal-500/5 -top-8 left-3/4 ${navbarStyles.floatSlowerAnimation}`}
      />
    </>
        </div>
        {/* Logo */}
        <div className={navbarStyles.container}>
            <div className={navbarStyles.innerContainer}>
                <div className={navbarStyles.logoContainer}>
                    <Link to ='/' className={navbarStyles.logoLink}>
                        <img src={logo} alt="Pickify" className={`${navbarStyles.logoImage} ${scrolled ? `h-10` : `h-12`} transition-all`} />
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
