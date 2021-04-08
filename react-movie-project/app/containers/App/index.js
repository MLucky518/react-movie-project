/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage/HomePage'

import '../../styles/styles.scss'
import Navbar from '../Navbar/Navbar'
import GlobalStyle from '../../components/global'

export default function App(props) {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0)
  }
  return (
    <div className="app-wrapper">
      <GlobalStyle />
      <Helmet defaultTitle="Everyone's a critic">
        <meta name="description" content="React Movie Reviews" />
      </Helmet>
      <Navbar />

      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/home" component={HomePage} />
      </Switch>
    </div>
  )
}
