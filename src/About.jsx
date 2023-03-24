import React from 'react'
import Common from './Common'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
   <>
    <Common  name="Welcome to About page" imagesrc={web} visit="/contact" btname="contact now" />
   </>    
  )
}

export default About