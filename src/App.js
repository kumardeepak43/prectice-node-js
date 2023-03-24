import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, redirect } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Service from './Service'
import Navbar from './Navbar';
const App = () => {
  return (
    <div>
      <Navbar />
      <switch>
        <Route exact path='/' compnent={Home} />
        <Route exact path='/About' compnent={About} />
        <Route exact path='/service' compnent={Service} />
        <Route exact path='/contact' compnent={Contact} />
        <redirect to="/"  />
      <Home />
      </switch>
    </div>
  )
}

export default App
