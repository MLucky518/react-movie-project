/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage/HomePage'

import '../../styles/styles.scss'
import Navbar from '../Navbar/Navbar'
import GlobalStyle from '../../components/global'
import Footer from '../Footer/Footer'
import Dropdown from '../Navbar/Dropdown'
import Reviews from '../Reviews/Reviews'

export default function App(props) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {}, [])

  const dropdownToggle = () => {
    setIsOpen(!isOpen)
  }

  window.onbeforeunload = function() {
    window.scrollTo(0, 0)
  }
  return (
    <div className="app-wrapper">
      <GlobalStyle />
      <Helmet defaultTitle="Everyone's a critic">
        <meta name="description" content="React Movie Reviews" />
      </Helmet>
      <Navbar toggle={dropdownToggle} />
      <Dropdown toggle={dropdownToggle} isOpen={isOpen} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/home" component={HomePage} />
        <Route path="/reviews">
          <Reviews />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}
