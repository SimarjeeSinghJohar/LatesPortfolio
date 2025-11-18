import React, { useRef } from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import ParticleBackground from '../components/ParticleBackground/ParticleBackground'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle'
import { Container } from './LayoutStyles'
import { useSmoothScroll, useScrollAnimation } from '../hooks/useScrollAnimations'

export const Layout = ({children}) => {
  const containerRef = useRef(null);
  
  useSmoothScroll();
  useScrollAnimation(containerRef, { once: true, threshold: 0.15 });

  return (
    <Container ref={containerRef}>
     <ParticleBackground />
     <ThemeToggle />
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
