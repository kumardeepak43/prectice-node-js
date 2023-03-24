import React from 'react'
import { NavLink } from 'react-router-dom'
import Common from './Common'

const Home = () => {
  return (
     <>
     <Common name="Grow your bussiness with" imagesrc={web} visit="/service" btname="Get started"  />
     </>
  );
};

export default Home