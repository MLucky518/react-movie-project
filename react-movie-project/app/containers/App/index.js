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
import { IoArrowUpSharp } from 'react-icons/io5'
import Critics from '../Critics/Critics'
import ReviewInfo from '../Reviews/ReviewInfo'

export default function App(props) {
  const [isOpen, setIsOpen] = useState(false)

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollPosition = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 500) {
      setShowScroll(false)
    }
  }

  window.addEventListener('scroll', checkScrollPosition)

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
        <Route exact path="/reviews" component={Reviews} />
        <Route path="/critics" component={Critics} />
        <Route
          exact
          path="/reviews/:id"
          render={props => <ReviewInfo {...props} />}
        />
      </Switch>

      <IoArrowUpSharp
        className="scrollIcon"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
      />
      <Footer />
    </div>
  )
}
