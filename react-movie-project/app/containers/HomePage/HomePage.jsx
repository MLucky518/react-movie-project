import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'

import { getMovieReviews } from 'resources/reviews/reviews.actions'
import { HomeImage } from '../../components/Home/Home'

export function HomePage(props) {
  const history = useHistory()

  useEffect(() => {
    props.getMovieReviews()
  },[])

  return (
    <div>
      <Helmet>
        <meta name="description" content="Home" />
      </Helmet>
      <main>
        <h1>Everyone's a critic</h1>
        <blockquote>Honest Movie Reviews by</blockquote>
        <HomeImage/>
        <h1> why</h1>
        <h1>I am no Jedig.</h1>
        <p>&mdash; Ahsoka Tano</p>
      </main>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = dispatch => ({
  getMovieReviews: () => dispatch(getMovieReviews()),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage)
